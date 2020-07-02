import express from 'express';
import cors from 'cors';

import routes from './routes';

class AppServer {
  server: express.Application;

  constructor () {
    this.server = express();
    this.middlewares();
    this.routes();

  }

  private routes (): void {
    this.server.use(routes);
  }

  private middlewares (): void {
    this.server.use(cors());
    this.server.use(express.json());
  }

}
export default new AppServer().server;