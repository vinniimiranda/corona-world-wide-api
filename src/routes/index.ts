import { Router, Request, Response } from 'express';
import CountryController from '../controllers/country-controller';
import StatsController from '../controllers/stats-controller';


class Routing {
  router: Router;

  constructor () {
    this.router = Router();
    this.router.use('/countries', CountryController.routes());
    this.router.use('/stats', StatsController.routes());
  }
}

export default new Routing().router;