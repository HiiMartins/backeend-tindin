import { Controller, Post } from "@overnightjs/core";
import { User } from "@src/model/user";
import { Request, Response } from "express";
import mongoose from "mongoose";

@Controller('users')
export class UserController {

    @Post('')
    public async createUser(req: Request, res: Response): Promise<void> {
        try{
            const user = new User(req.body);
            const result = await user.save();
            res.status(201).send(result);
        } catch (error) {
            if (error instanceof mongoose.Error.ValidationError){
                res.status(422).send({ error: 'validation error' });
            } else {
                res.status(500).send({ error: 'Internal Server Error' });
            }
        }
    }
}