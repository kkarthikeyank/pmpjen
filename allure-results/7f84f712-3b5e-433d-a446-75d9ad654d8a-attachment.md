# Test info

- Name: GET User API - https://reqres.in/api/users/2 >> Should return 404 for non-existent user
- Location: /home/karthi/pmp/src/tests/apitest/userget.spec.js:35:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: 401
    at /home/karthi/pmp/src/tests/apitest/userget.spec.js:37:31
```

# Test source

```ts
   1 | import { test, expect, request } from '@playwright/test';
   2 |
   3 | test.describe('GET User API - https://reqres.in/api/users/2', () => {
   4 |   let apiContext;
   5 |
   6 |   test.beforeAll(async ({ playwright }) => {
   7 |     apiContext = await request.newContext();
   8 |   });
   9 |
  10 |   test('Should return 200 status and correct user data', async () => {
  11 |     const response = await apiContext.get('https://reqres.in/api/users/2');
  12 |
  13 |     // 1. Check status code
  14 |     expect(response.status()).toBe(200);
  15 |
  16 |     // 2. Validate headers
  17 |     expect(response.headers()['content-type']).toContain('application/json');
  18 |
  19 |     // 3. Validate response time (optional)
  20 |      // 3. Validate response time (correct way)
  21 |
  22 |
  23 |     // Check nested user data
  24 |     expect(user.id).toBe(2);
  25 |     expect(user.email).toBe('janet.weaver@reqres.in');
  26 |     expect(user.first_name).toBe('Janet');
  27 |     expect(user.last_name).toBe('Weaver');
  28 |     expect(user.avatar).toContain('https://');
  29 |
  30 |     // Support info validation
  31 |     expect(body.support.url).toContain('https://');
  32 |     expect(typeof body.support.text).toBe('string');
  33 |   });
  34 |
  35 |   test('Should return 404 for non-existent user', async () => {
  36 |     const response = await apiContext.get('https://reqres.in/api/users/23');
> 37 |     expect(response.status()).toBe(404);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  38 |   });
  39 | });
  40 |
```