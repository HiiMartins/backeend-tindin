describe('User creation test', () => {
    it('should create user with success, phase green of TDD ', async() => {
        const newUser = {
            name: 'Higor Martins',
            email: 'higor@teste.com',
            password: '123'
        };
        
        const response = await global.testRequest.post('/users').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(newUser));
    });
});