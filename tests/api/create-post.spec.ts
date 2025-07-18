import { test, expect } from '@playwright/test';
import { createApiContext } from '../../utils/api-context';

test('POST /posts creates a new post', async () => {
  const api = await createApiContext();
  const response = await api.post('/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  });

  expect(response.status()).toBe(201);
  const body = await response.json();

  expect(body).toMatchObject({
    title: 'foo',
    body: 'bar',
    userId: 1
  });
});
