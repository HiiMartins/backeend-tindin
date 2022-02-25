import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller('users')
export class UserController {

    @Post('')
    public async createUser(req: Request, res: Response): Promise<void> {
        res.status(201).send( { ...req.body, id: 'fake_id' });
    }
}