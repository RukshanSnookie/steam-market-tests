const {test, expect} = require('@playwright/test');
const {BASE_URI} = require('../../testdata/urls');

test("Delete Author", async ({request}) => {
    const response = await request.delete(`${BASE_URI}/api/v1/Authors/5`)

    expect(response.status()).toBe(200);
})