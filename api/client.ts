import { APIRequestContext, request } from '@playwright/test';

export const createClient = async (): Promise<APIRequestContext> => {
  return await request.newContext({
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0',
      'Accept': 'application/json',
    },
    timeout: 10000,
    ignoreHTTPSErrors: true,
  });
};