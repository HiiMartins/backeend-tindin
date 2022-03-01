import { Class } from "@src/model/class";

describe('Classes functional test', () => {
    beforeAll(async () => await Class.deleteMany({}));
    describe('Implementation of tests for the post method', () => {
        it('should create a class with success', async () => {
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

        it('should return 422 when there is a validation error', async () => {
            const newClass = {
                name: 'git básico',
                description: 'introcução ao git',
                video: 'www.link-aula.com',
                dateInit: '2021-09-10T03:00:00.000Z',
                dateEnd: '2022-01-30T03:00:00.000Z',
                dateCreated: '2021-08-30T03:00:00.000Z',
                totalComments: 'Invalid_string'
            };

            const response = await global.testRequest.post('/classes').send(newClass);
            expect(response.status).toBe(422);
            expect(response.body).toEqual({
                error:
                    'Class validation failed: totalComments: Cast to Number failed for value "Invalid_string" (type string) at path "totalComments"'
            });
        });

    });
    describe('Implementation of tests for the get method', () => {
        it('should return a list of classes with success', async () => {

            const response = await global.testRequest.get('/classes');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: 'classes list' });
        });
    });
});