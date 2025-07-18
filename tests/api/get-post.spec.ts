import { test, expect } from '@playwright/test';
import { createApiContext } from '../../utils/api-context';

test('GET /posts/1 returns correct post', async () => {
  const api = await createApiContext();
  const response = await api.get('/posts/1');

  expect(response.ok()).toBeTruthy();
  const body = await response.json();

  expect(body.id).toBe(1);
});
