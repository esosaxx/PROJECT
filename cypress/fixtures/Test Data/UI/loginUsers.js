import { uiPassword } from "../../../support/UI testing/helper";

export const validUser = {
    email: 'esosa6@gmail.com',
    password: uiPassword,
};

export const invalidUser1 = {
    email: 'fake@email.com',
    password: 'password2',
};

export const invalidUser2 = {
    email: 'fake2@email.com',
    password: 'password',
};