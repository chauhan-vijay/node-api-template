import * as express from "express";

import * as cors from "cors";
import * as compression from "compression";
import * as helmet from "helmet";

import { useExpressServer } from "routing-controllers";
import { UserController } from "./controllers/user.controller";

export class ExpressConfig {
  app: express.Express;

  constructor() {
    this.app = express();

    this.app.use(cors());

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.use(
      compression({
        threshold: 0,
      })
    );

    this.app.use(helmet());

    this.setupControllers();
  }

  setupControllers() {
    useExpressServer(this.app, {
      controllers: [UserController],
    });
  }
}
