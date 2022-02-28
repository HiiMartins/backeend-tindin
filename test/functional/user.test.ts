import { User } from "@src/model/user";

describe('Users functional tests', () => {
    beforeAll(async () => await User.deleteMany({}));
    describe('When creating a new User', () => {
        it('should create a user with success', async() => {
            const newUser = {
                name: 'Higor Martins',
                email: 'higor@teste.com',
                password: '123'
            }
        
            const response = await global.testRequest.post('/users').send(newUser);
            expect(response.status).toBe(201);
            expect(response.body).toEqual(expect.objectContaining(newUser));
        });

        it('should return 422 when there is a validation error', async () => {
            const newUser = {
                name: null,
                email: 'higor@teste.com.br',
                password: '123'
            };

            const response = await await global.testRequest.post('/users').send(newUser);
            expect(response.status).toBe(422);
            expect(response.body).toEqual({
                error:
                    'validation error',
            });    
        });

        it.skip('should return 500 when there is any error than validation error', async() => {
            //TODO think in a way to throw a 500
        });
    });
});  