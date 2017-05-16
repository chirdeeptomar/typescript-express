'use strict';

import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";

namespace main {
  const app = express();
  app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!');
  });

  app.listen(3000, function () {
    console.log('listening on port 3000!');
  });
}