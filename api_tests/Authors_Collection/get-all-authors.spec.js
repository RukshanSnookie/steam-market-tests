const {test, expect} = require('@playwright/test');
const {BASE_URI} = require('../../testdata/urls');

test('Get all authors', async ({request}) => {
   const response = await request.get(`${BASE_URI}/api/v1/Authors`)
   console.log(`Response status: ${response.status()}`);
   // console.log(await response.json());

   expect(response.status()).toBe(200);

   const responseText = await response.text()
   expect(responseText).toContain('idBook');
});