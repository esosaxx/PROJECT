/// <reference types="cypress" />

import { randomString } from "../../../support/UI testing/helper";
let email = `esosa${randomString}@gmail.com`;
let password = `password${randomString}`;
describe('API Authentication Testing with valid credentialas', () => {
    //const validUsername = "george.bluth@reqres.in";

    it('Verifies registration with valid credentials', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                username: "george.bluth@reqres.in",
                email,
                password,
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
        //expect(response.body.token).to.contain('string');
            //expect(response.body.data,id).to.equal('string');
        })    
        });
    
    it('Login valid session', async () => {
        let validEmail = email;
        let validPassword = password;
        const response = await cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            body: {
                username: "george.bluth@reqres.in",
                email: validEmail,
                password: validPassword,

            }
        });

        expect(response.status).to.equal(200);
        
    });


    after('Log out of session', async () => {
        const response = await cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/logout',
        });

        expect(response.status).to.equal(200);
        
    });
});

