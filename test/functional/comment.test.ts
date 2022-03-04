import { Comment } from "@src/model/comment";

describe('Comments functional test', () => {
    beforeAll(async () => await Comment.deleteMany({}));
    it('should create comment with success', async () => {
        const newComment = {
            comment: 'muito bom!',
            dateCreated: '2022-01-30T03:00:00.000Z'
        }
        const response = await global.testRequest.post('/classes/comments').send(newComment);
        expect(response.status).toBe(201);
        expect(response.body).toEqual(expect.objectContaining(newComment));
    });

    it('should return 422 when there is validation error', async () => {
        const newComment = {
            comment: null,
            dateCreated: '2022-01-30T03:00:00.000Z'
        };

        const response = await global.testRequest.post('/classes/comments').send(newComment);
        expect(response.status).toBe(422);
        expect(response.body).toEqual({ 
            error: 
            'Comment validation failed: comment: Path `comment` is required.' 
        });
    });

    //it.skip('should return 500 when there is a server problem')
});