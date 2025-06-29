const { test, expect } = require('@playwright/test');
const { BASE_URI } = require('../../testdata/urls');


test("Add a new Author", async ({ request }) => {
    const response = await request.post(`${BASE_URI}/api/v1/Authors`, {
        data: {
            "id": 1100,
            "idBook": 1100,
            "firstName": "Harry Porter",
            "lastName": "Final Edition"
        }
    })
    expect(response.status()).toBe(200);
    const responseText = await response.text()
    expect(responseText).toContain("firstName")
    console.log(response.json());
})