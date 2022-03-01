import { Class } from "@src/model/class";

describe('Classes functional test', () => {
    beforeAll(async () => await Class.deleteMany({}));
    describe('Implementation of tests for the post method', () => {
        it('should create a class', async () => {
            const newClass = {
                name: 'git básico',
                description: 'introcução ao git',
                video: 'www.link-aula.com',
                dateInit: '2021-09-10T03:00:00.000Z',
                dateEnd: '2022-01-30T03:00:00.000Z',
                dateCreated: '2021-08-30T03:00:00.000Z',
                totalComments: 10
            };

            const response = await global.testRequest.post('/classes').send(newClass);
            expect(response.status).toBe(201);
            expect(response.body).toEqual(expect.objectContaining(newClass));
        });
    });
    describe('Implementation of tests for the get method', () =>{
        it('should return a list of classes', async () => {

            const response = await global.testRequest.get('/classes');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({message:'classes list'});
        });
    });
});