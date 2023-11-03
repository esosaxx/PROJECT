import { randomString } from "../../../support/UI testing/helper";
//CRUD on User
describe('CRUD on User ', () => {
    const email = `esosa${randomString}@gmail.com`;
    let id;

    before('Create User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            body: {
                username: "george.bluth@reqres.in",
                email,
                password:'password2',
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            id = response.body.id;
        });
    });

    after('Delete User', async () => {
        const response = await cy.request({
            method: 'DELETE',
            url: `https://reqres.in/api/users/${id}`
        });
        expect(response.status).to.equal(204);
    });

    it('Retrieve User', async () => {
        const response = await cy.request({
            method: 'GET',
            url: `https://reqres.in/api/users/${id}`,
            headers: {
                Params: id,
            },
        });

        expect(response.status).to.equal(200);
        expect(response.body.data.id).to.equal(0);
        expect(response.body.data.email).to.equal(email);
    });

    it('Update User', async () => {
        const response = await cy.request({
            method: 'PATCH',
            url: `https://reqres.in/api/users/${id}`,
        });

        expect(response.status).to.equal(200);
    });
});