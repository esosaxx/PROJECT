import { randomString } from "../../../support/UI testing/helper";
//CRUD on Unknown Resource - no endpoint to create
describe('CRUD on Unknown Resource ', () => {
    const email = `esosa${randomString}@gmail.com`;
    let id;

    before('Get Single Resource', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/{resource}',
            headers: {
                Params : {
                    page:1,
                    per_page:1,
                }
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.page).to.equal(1);
            id = response.body.data.id;
        });
    });

    after('Delete User', async () => {
        const response = await cy.request({
            method: 'DELETE',
            url: `https://reqres.in/api/{resource}/${id}`
        });
        expect(response.status).to.equal(204);
    });


    it('Updates Resource', () => {
        cy.request({
            method: 'PUT',
            url: `https://reqres.in/api/{resource}/${id}`,
        });

        expect(response.status).to.equal(200);
    });
});