import './util/module-alias';
import { Server } from '@overnightjs/core';
import { Application } from 'express';
import bodyParser from 'body-parser';
import * as database from '@src/database';
import { UserController } from './controllers/user';

export class SetupServer extends Server {
    constructor(private port = 3000){
        super();
    }

    public init(): void {
        this.setupExpress();
        this.setupControllers();       
    }

    public getApp(): Application {
        return this.app;
    }

    private setupExpress(): void {
        this.app.use(bodyParser.json());
    }

    private setupControllers(): void {
        const userController = new UserController();
        this.addControllers(userController);
    }

    private async databaseSetup(): Promise<void> {
        await database.connect();
    }

    
}