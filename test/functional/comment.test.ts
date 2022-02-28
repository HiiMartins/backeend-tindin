describe('Comments functional test', () => {
    it('should create comment, phase green tdd', async () => {

        const response = await global.testRequest.post('classes/comments');
        expect(response.status).toBe(201);
        expect(response.body).toEqual('succees');
    });
});