import { Router } from 'express';
import AnottationController from '../controllers/AnottationController';
export default class AnottationRoutes {
    public init(): Router {
        const routes = Router();
        const controller = new AnottationController();

        routes.get('/user/:userUID/anottation', controller.index);
        routes.get('/user/:userUID/anottation/:uid', controller.show);
        routes.post('/user/:userUID/anottation', controller.store);
        routes.put('/user/:userUID/anottation/:uid', controller.update);
        routes.delete('/user/:userUID/anottation/:uid', controller.delete);

        return routes;
    }
}