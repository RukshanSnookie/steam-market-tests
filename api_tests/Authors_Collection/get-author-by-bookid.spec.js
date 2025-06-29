const { test, expect } = require('@playwright/test');
const { BASE_URI } = require('../../testdata//urls');

test("Get author by BookId", async ({ request }) => {
    const response = await request.get(`${BASE_URI}/api/v1/Authors/authors/books/5`)
    expect(response.status()).toBe(200);
})


