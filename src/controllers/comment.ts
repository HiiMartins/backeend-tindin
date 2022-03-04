import { Controller, Post } from "@overnightjs/core";
import { Comment } from '@src/model/comment';
import { Request, Response } from "express";
import mongoose from "mongoose";

@Controller('classes/comments')
export class CommentController {

    @Post('')
    public async createComment(req: Request, res: Response) {
        try {
            const newComment = new Comment(req.body);
            const result = await newComment.save();

            res.status(201).send(result);
        } catch (error) {
            if(error instanceof mongoose.Error.ValidationError){
                res.status(422).send({ error: error.message });
            } else {
                res.status(500).send({ error: 'defaul mongosse validation error' });
            }
        }
    }
}