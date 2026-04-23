import { APIRequestContext, request } from '@playwright/test';

export const createClient = async (): Promise<APIRequestContext> => {
  return await request.newContext({
    baseURL: 'https://brasilapi.com.br/api',
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
    },
  });
};