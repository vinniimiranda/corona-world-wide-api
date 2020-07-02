import { Router, Request, Response } from 'express'
import { api } from '../services/api';

class StatsController {
  private router = Router();

  constructor () {
    this.routes();
  }

  public routes (): Router {
    this.router.get('/', this.index);
    return this.router;
  }

  private async index (req: Request, res: Response): Promise<Response> {
    try {
      api({
        params: {
          global: "stats"
        }
      }).then(({ data }) => res.status(200).json(data.results[0]))
    } catch (error) {
      return res.status(500)
    }
    return res.status(500)
  }
}

export default new StatsController()