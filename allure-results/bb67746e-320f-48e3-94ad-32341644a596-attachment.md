# Test info

- Name: GET User API - https://reqres.in/api/users/2 >> Should return 404 for non-existent user
- Location: /home/karthi/pmp/src/tests/apitest/userget.spec.js:44:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: 401
    at /home/karthi/pmp/src/tests/apitest/userget.spec.js:46:31
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
  20 |     const responseTime = response.timing().duration;
  21 |     console.log(`Response time: ${responseTime}ms`);
  22 |     expect(responseTime).toBeLessThan(1000);
  23 |
  24 |     // 4. Parse and validate body
  25 |     const body = await response.json();
  26 |
  27 |     // Check top-level keys
  28 |     expect(body).toHaveProperty('data');
  29 |     expect(body).toHaveProperty('support');
  30 |
  31 |     // Check nested user data
  32 |     const user = body.data;
  33 |     expect(user.id).toBe(2);
  34 |     expect(user.email).toBe('janet.weaver@reqres.in');
  35 |     expect(user.first_name).toBe('Janet');
  36 |     expect(user.last_name).toBe('Weaver');
  37 |     expect(user.avatar).toContain('https://');
  38 |
  39 |     // Support info validation
  40 |     expect(body.support.url).toContain('https://');
  41 |     expect(typeof body.support.text).toBe('string');
  42 |   });
  43 |
  44 |   test('Should return 404 for non-existent user', async () => {
  45 |     const response = await apiContext.get('https://reqres.in/api/users/23');
> 46 |     expect(response.status()).toBe(404);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  47 |   });
  48 | });
  49 |
```