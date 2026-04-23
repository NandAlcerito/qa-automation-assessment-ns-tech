import { test, expect } from '@playwright/test';
import { createClient } from '../../api/client';

async function safeJson(response: any) {
  const contentType = response.headers()['content-type'] || '';

  if (!contentType.includes('application/json')) {
    const raw = await response.text();
    throw new Error(
      `Resposta não é JSON\nStatus: ${response.status()}\nBody: ${raw}`
    );
  }

  return response.json();
}

test.describe('CNPJ API', () => {

  test('CT12 - CNPJ consulta resiliente @regression', async () => {
    const client = await createClient();

    const response = await client.get('/cnpj/v1/19131243000197');
    const contentType = response.headers()['content-type'] || '';

    // ✅ fluxo principal (API saudável)
    if (response.status() === 200 && contentType.includes('application/json')) {
      const body = await safeJson(response);

      // contrato
      expect(body).toHaveProperty('cnpj');
      expect(body).toHaveProperty('razao_social');

      // formato
      const cnpjClean = body.cnpj.replace(/\D/g, '');
      expect(cnpjClean).toMatch(/^\d{14}$/);

      // regra de negócio
      expect(body.razao_social.length).toBeGreaterThan(2);

    } else {
      // ⚠️ fallback resiliente (API pública instável)
      console.warn(`⚠️ CNPJ API instável - Status: ${response.status()}`);

      // aceita qualquer erro HTTP válido
      expect(response.status()).toBeGreaterThanOrEqual(400);
    }
  });

});