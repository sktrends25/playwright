import { test, expect } from '@playwright/test';

test('GET request - List users', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);
    
    expect(responseBody.data).toBeDefined();
    expect(responseBody.data.length).toBeGreaterThan(0);
});
test('POST request - Create user', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
        data: {
            name: 'John Doe',
            job: 'QA Engineer'
        }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.name).toBe('John Doe');
    expect(responseBody.job).toBe('QA Engineer');
});
test('PUT request - Update user', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        data: {
            name: 'Jane Doe',
            job: 'Senior QA'
        }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.name).toBe('Jane Doe');
    expect(responseBody.job).toBe('Senior QA');
});
test('DELETE request - Delete user', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2');
    expect(response.status()).toBe(204);
});