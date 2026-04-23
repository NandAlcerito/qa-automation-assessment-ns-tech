import { test, expect } from '@playwright/test';
import { createClient } from '../../api/client';

async function safeJson(response: any) {
  const contentType = response.headers()['content-type'];

  if (!contentType?.includes('application/json')) {
    const raw = await response.text();
    throw new Error(
      `Resposta não é JSON\nStatus: ${response.status()}\nBody: ${raw}`
    );
  }

  return response.json();
}

test.describe('CEP API', () => {

  test('CT09 - CEP válido retorna estrutura correta', async () => {
    const client = await createClient();

    const response = await client.get('https://brasilapi.com.br/api/cep/v1/01001000');
    expect(response.status()).toBe(200);

    const body = await safeJson(response);
    

    // contrato
    expect(body).toMatchObject({
      cep: expect.any(String),
      state: expect.any(String),
      city: expect.any(String),
    });

    // formato
    expect(body.cep.replace('-', '')).toMatch(/^\d{8}$/);

    // regra de negócio
    expect(body.state.length).toBe(2);
    expect(body.city.length).toBeGreaterThan(2);
  });

  test('CT10 - CEP inválido retorna erro controlado', async () => {
  const client = await createClient();

  const response = await client.get('https://brasilapi.com.br/api/cep/v1/00000000');

  const contentType = response.headers()['content-type'];

  if (!contentType?.includes('application/json')) {
    expect(response.status()).toBe(404);
    return;
  }

  const body = await response.json();

  expect(response.status()).toBeGreaterThanOrEqual(400);

  expect(body).toHaveProperty('message');
  expect(typeof body.message).toBe('string');
  expect(body.message.length).toBeGreaterThan(0);

  
  expect(body.message).toMatch(/erro|não encontrado/i);
});

});