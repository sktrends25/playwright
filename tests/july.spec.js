import {test, expect} from '@playwright/test'
import { request } from 'http'

test('post method', async({request}) => {
    const response = await request.post('https://reqres.in/api/users',{
data :{
            name: 'abcd',
    job: 'leader'
        },
         Headers:{"x-api-key":"reqres-free-v1"}
    });
   const responseBody = await response.json();
   expect(responseBody.name).toBe("morpheus");
   expect(response.status()).toBe(201);   
});
//hii //hello
