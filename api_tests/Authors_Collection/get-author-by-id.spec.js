const {test, expect} = require('@playwright/test');
const {BASE_URI} = require('../../testdata/urls');

test("Get Author by ID", async ({request}) => {
    const response = await request.get(`${BASE_URI}/api/v1/Authors/5`)

    expect(response.status()).toBe(200);
    console.log(response.json());
})