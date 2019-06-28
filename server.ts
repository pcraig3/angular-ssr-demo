import "zone.js/dist/zone-node";
import "reflect-metadata";
import { enableProdMode } from "@angular/core";
// Express Engine
import { ngExpressEngine } from "@nguniversal/express-engine";
// Import module map for lazy loading
import { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";

import * as express from "express";
import cookieParser from "cookie-parser";
import { join } from "path";

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
app
  .use(cookieParser())
  // both of these are needed to parse post request params
  .use(express.urlencoded({ extended: true }))
  .use(express.json());

const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), "dist/browser");

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require("./dist/server/main");

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  "html",
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set("view engine", "html");
app.set("views", DIST_FOLDER);

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });
// Server static files from /browser
app.get(
  "*.*",
  express.static(DIST_FOLDER, {
    maxAge: "1y"
  })
);

app.post("*", (req, res) => {
  let accessCode = req.body.accessCode || "";
  // set access code from form in cookie (good for 10 minutes)
  res.cookie("accessCode", accessCode, { maxAge: 600000 });

  if (accessCode && req.body.redirect) {
    return res.redirect(302, req.body.redirect);
  }

  res.status(422).render("index", { req });
});

// All regular routes use the Universal engine
app.get("*", (req, res) => {
  console.log(`req.cookies = ${JSON.stringify(req.cookies)}`);
  res.render("index", { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
