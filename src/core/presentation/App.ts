import express from 'express';
import cors from 'cors';
import Database from '../data/connections/Database';
import UserRoutes from '../../features/users/routers/UserRoutes';
import AnottationRoutes from '../../features/anottations/routers/AnottationRoutes';

export default class App {
    readonly #express: express.Application;

    constructor() {
        this.#express = express();
    }

    public async init() {
        this.config();
        this.middlewares();
        this.routes();
        await this.database();
    }

    private async database() {
        await new Database().openConnection();
    }

    private config() {
        this.#express.use(express.json());
        this.#express.use(express.urlencoded({ extended: false }));
        this.#express.use(cors());
    }

    private middlewares() {

    }

    private routes() {
        const userRoutes = new UserRoutes().init();
        const anottationRoutes = new AnottationRoutes().init();
        
        this.#express.use(userRoutes);
        this.#express.use(anottationRoutes);
    }

    public start(port: any) {
        this.#express.listen(port, () => {
            console.log('Api maravilinda rodando...');
        });
    }
};