import { Controller, Get, Post } from "@overnightjs/core";
import { Class } from "@src/model/class";
import { Request, Response } from "express";

@Controller('classes')
export class ClassController {

    @Post('')
    public async createClass(req: Request, res: Response) {
        const newClass = new Class(req.body);
        const result = await newClass.save();
        res.status(201).send(result);
    }

    @Get('')
    public listClasses(req: Request, res: Response) {
        res.send({message: 'classes list'});
    }
}