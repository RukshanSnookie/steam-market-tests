const { test, expect } = require('@playwright/test');
const { BASE_URI } = require('../../testdata//urls');

test("Get aothor by BookId", async ({ request }) => {
    const response = await request.get(`${BASE_URI}/api/v1/Authors/authors/books/5`, {
        data: {
            "id": 1100,
            "idBook": 1100,
            "firstName": "Harry Porter",
            "lastName": "Final Edition"
        }
    })

    expect(response.status()).toBe(200);
})