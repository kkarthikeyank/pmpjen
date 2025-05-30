# Test info

- Name: GET single user from ReqRes API
- Location: /home/karthi/pmp/src/tests/apitest/userget.spec.js:3:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
    at /home/karthi/pmp/src/tests/apitest/userget.spec.js:9:29
```

# Test source

```ts
   1 | import { test, expect, request } from '@playwright/test';
   2 |
   3 | test('GET single user from ReqRes API', async () => {
   4 |   const apiContext = await request.newContext();
   5 |
   6 |   const response = await apiContext.get('https://fhirapi-dev.healthpartnersplans.com/fhir-request/Patient/523183');
   7 |
   8 |   // ✅ Check status code
>  9 |   expect(response.status()).toBe(200);
     |                             ^ Error: expect(received).toBe(expected) // Object.is equality
  10 |
  11 |   // ✅ Parse and check data
  12 |   const body = await response.json();
  13 |
  14 |   expect(body.data.id).toBe(2);
  15 |   expect(body.data.email).toBe('janet.weaver@reqres.in');
  16 | });
  17 |
```