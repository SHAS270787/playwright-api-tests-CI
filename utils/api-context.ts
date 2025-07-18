import { request } from '@playwright/test';

export async function createApiContext() {
  return await request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com'
  });
}