import { ExpressConfig } from "./server";
import { logger } from "./util/logging";
import { config } from "./util/config";

export class Application {
  server: any;
  express: ExpressConfig;

  constructor() {
    this.express = new ExpressConfig();
    const port = config.port;

    this.server = this.express.app.listen(port, () => {
      logger.info(`
        ------------
        Server Started!
        Express: http://localhost:${port}
        Swagger Docs: http://localhost:${port}/docs
        Swagger Spec: http://localhost:${port}/api-docs
        ------------
      `);
    });
  }
}
