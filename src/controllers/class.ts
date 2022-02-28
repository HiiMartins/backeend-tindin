import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from "express";

@Controller('classes')
export class ClassController {

    @Post('')
    public createClass(req: Request, res: Response) {
        const newClass = {
            name: 'git básico',
            video: 'www.link-aula.com',
            date_init: '2021-09-10',
            date_end: '2022-01-30',
            date_created: '2021-08-30',
            date_update: '2021-12-03',
            total_comments: 10
        };
        res.status(201).send(newClass);
    }

    @Get('')
    public listClasses(req: Request, res: Response) {
        res.send({message: 'classes list'});
    }
}