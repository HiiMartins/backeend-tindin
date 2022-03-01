import './util/module-alias';
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import * as database from '@src/database';
import { UserController } from './controllers/user';
import { ClassController } from './controllers/class';

export class SetupServer extends Server {
    constructor(private port = 3000){
        super();
    }

    public async init(): Promise<void> {
        this.setupExpress();
        this.setupControllers();       
        await this.databaseSetup();
    }

    public getApp(): Application {
        return this.app;
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const userController = new UserController();
        const classController = new ClassController();
        this.addControllers([userController, classController]);
    }

    private async databaseSetup(): Promise<void> {
        await database.connect();
    }

    public async close (): Promise<void> {
        await database.close();
    }
}