import { test, expect, request } from '@playwright/test';

test('GET single user from ReqRes API', async () => {
  const apiContext = await request.newContext();

  const response = await apiContext.get('https://fhirapi-dev.healthpartnersplans.com/fhir-request/Patient/523183');

  // ✅ Check status code
  expect(response.status()).toBe(200);

  // ✅ Parse and check data
  const body = await response.json();

//   expect(body.data.id).toBe(2);
//   expect(body.data.email).toBe('janet.weaver@reqres.in');
});
