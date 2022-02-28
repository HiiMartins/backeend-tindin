describe('Classes functional test', () => {
    describe('Implementation of tests for the post method', () => {
        it('should create class, phase grenn tdd', async () => {
            const newClass = {
                name: 'git básico',
                video: 'www.link-aula.com',
                date_init: '2021-09-10',
                date_end: '2022-01-30',
                date_created: '2021-08-30',
                date_update: '2021-12-03',
                total_comments: 10
            };

            const response = await global.testRequest.post('/classes').send(newClass);
            expect(response.status).toBe(201);
            expect(response.body).toEqual(newClass);
        });
    });
    describe('Implementation of tests for the get method', () =>{
        it('should return a list of classes', async () => {

            const response = await global.testRequest.get('/classes');
            expect(response.status).toBe(200);
            expect(response.body).toEqual('classes list');
        });
    });
});