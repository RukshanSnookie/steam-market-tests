const { test, expect } = require('@playwright/test');
const { BASE_URI } = require('../../testdata/urls');

test("Update author data", async ({ request }) => {
    const response = await request.put(`${BASE_URI}/api/v1/Authors/5`, {
        data: {
            "id": 1100,
            "idBook": 1100,
            "firstName": "Harry Porter",
            "lastName": "Final Edition"
        }
    })
    expect(response.status()).toBe(200);
    console.log(response.json());

})