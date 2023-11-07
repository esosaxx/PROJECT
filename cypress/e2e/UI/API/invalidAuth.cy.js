// <reference types="cypress" />

import { randomString } from "../../../support/UI testing/helper";

describe('API Authentication Testing with invalid credentialas', () => {
const username = `fakeuser${randomString}`;

//     it('Register user with invalid username', () => {
//         cy.request({
//             method: 'POST',
//             url: 'https://reqres.in/api/register',
//             body: {
//                 username,
//                 email: "george.bluth@reqres",
//                 password: "password",
//             },
//         }).then((response) => {
//             expect(response.status).to.equal(400);
//             //expect(response.body.data.token).to.equal('string');
//             //expect(response.body.data,id).to.equal('string');
//         });
//     });

    it('Login session with invalid credentials', async () => {
        let fakeUsername = username;
        const response = await cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                username: fakeUsername,
                email: "george.bluth@reqres",
                password: "password",

            }
        });

        expect(response.status).to.equal(400);
        
    });

    it('Creating Login session fails with no credentials', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
    
        }).then((response) => {
            expect(response.status).to.equal(400);
        });
    });
});
