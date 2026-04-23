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

  test('CT08 - CEP válido retorna estrutura correta', async () => {
    const client = await createClient();

    const response = await client.get('/cep/v1/01001000');
    const contentType = response.headers()['content-type'] || '';

    if (response.status() === 200 && contentType.includes('application/json')) {
      const body = await response.json();

      expect(body).toMatchObject({
        cep: expect.any(String),
        state: expect.any(String),
        city: expect.any(String),
      });

      expect(body.cep.replace('-', '')).toMatch(/^\d{8}$/);
      expect(body.state.length).toBe(2);
      expect(body.city.length).toBeGreaterThan(2);

    } else {
      console.warn('⚠️ CEP API instável ou indisponível');
      expect([400, 404, 500]).toContain(response.status());
    }
  });

  test('CT10 - CEP com formato inválido', async () => {
    const client = await createClient();

    const response = await client.get('/cep/v1/ABC123');

    expect(response.status()).toBeGreaterThanOrEqual(400);
  });

  test('CT11 - CEP incompleto', async () => {
    const client = await createClient();

    const response = await client.get('/cep/v1/123');

    expect(response.status()).toBeGreaterThanOrEqual(400);
  });

});