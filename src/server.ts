'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import { WelcomeRoute } from './routes';
import { RequestLogger } from "./middleware/requestLogger";

namespace main {
  const app: express.Application = express();

  app.use(RequestLogger);

  app.use('/api', WelcomeRoute);

  app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!');
  });

  app.listen(3000, function () {
    console.log('listening on port 3000!');
  });
}