import { Controller, Get, Post } from "@overnightjs/core";
import { Class } from "@src/model/class";
import { Request, Response } from "express";
import mongoose from "mongoose";

@Controller('classes')
export class ClassController {

    @Post('')
    public async createClass(req: Request, res: Response) {
        try {
            const newClass = new Class(req.body);
            const result = await newClass.save();
            res.status(201).send(result);
        } catch (error){
            if (error instanceof mongoose.Error.ValidationError){
                res.status(422).send({ error: error.message });
            } else {
                res.status(500).send({ error: 'Internal Server Error' });
            }
        }
    }

    @Get('')
    public listClasses(req: Request, res: Response) {
        res.send({ message: 'classes list' });
    }
}