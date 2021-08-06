import { Router } from'express';
import { EMVC } from '../../../../core/presentation';
import { middlewareAdapter, routerMvcAdapter } from '../../../../core/presentation';
import { AnottationController } from '../controllers';
import { AnottationMiddleware } from '../middlewares';
import { MVCController } from '../../../../core/presentation';
import { AnottationRepository } from '../../infra';
import { CacheRepository } from '../../infra';

const makeController = (): MVCController => {
    const repository = new AnottationRepository();
    const cache = new CacheRepository();
    return new AnottationController(repository, cache);
};

export default class ProjectRoutes {
    public init(routes: Router) {
       routes.get('/anottations', 
              routerMvcAdapter(makeController(), EMVC.INDEX));

       routes.get('/anottations/:uid', 
              routerMvcAdapter(makeController(), EMVC.SHOW));

       routes.post('/anottations', 
              middlewareAdapter(new AnottationMiddleware()),
              routerMvcAdapter(makeController(), EMVC.STORE));
        
       routes.put('/anottations/:uid',
              middlewareAdapter(new AnottationMiddleware()),
              routerMvcAdapter(makeController(), EMVC.UPDATE));
        
       routes.delete('/anottations:uid',
              routerMvcAdapter(makeController(), EMVC.DELETE));
    }
}