import { createServer } from "http";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as helmet from "helmet";
import * as i18n from "i18n";
import * as cookieParser from "cookie-parser"; 
import * as expressSession from "express-session";
import { Request, Response, NextFunction } from "express";

import { mongoDb } from "./config"
import { ApiRoutes } from "./routes/index.route";

import * as path from "path";
import { CONSTANT } from "./config";
import { initGlobals } from "./util";
import { Elasticsearch } from './lib/elasticsearch';
//var docs = require("express-mongoose-docs");

class App {
  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.initDependency();
    this.routes(); //initialize all routes
    // bootInit(); //initialize bootstrap methods
    //initGlobals();
    this.initConfig();
    new Elasticsearch().createConnection();
  }

  public app: express.Application;
  public server: any;

  private initConfig = async () => {
      mongoDb.init();
      if (process.env.NODE_ENV !== "production") mongoDb.mongoDebug(false)
      mongoDb.mongoDebug(true);
  }
  
  private initDependency(): void {
    i18n.configure({
      locales: ['en', 'de'],
      directory: process.cwd() + '/locales'
    });
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use((req, res, next) => {
      console.log("________________HIT________________");
      next();
    });
    this.app.use(cookieParser());
    this.app.use(i18n.init);
    this.app.use(
      expressSession({
        secret: "blogApp",
        resave: false,
        saveUninitialized: true,
        cookie: {
          secure: false
        }
      })
    );

    this.app.use(function (req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      );
      next();
    });
    this.app.use(cors());
    this.app.use(helmet());
    this.logger();
    this.errorHandler();
    // this.app.use(passports.initialize());
    // this.app.use(passports.session());
    this.app.use(express.static(path.join(__dirname, "../public"))); //creating public folder router
  }

  private routes(): void {
    this.app.get("/", (req, res) => {
        return res.send("Welcome to the blog App");
    })

    this.app.use(ApiRoutes.path, ApiRoutes.router);

    this.app.use((req, res) => {
      res
        .status(CONSTANT.HTTP_STATUS_CODE.URL_NOT_FOUND)
        .json(CONSTANT.HTTP_RESPONSED.INVALID_URL_RESPONSE);
    });
  }

  private logger(): void {
    this.app.use(function (req: Request, res: Response, next: NextFunction) {
      res.locals.startTime = Date.now();
      console.log(
        "--------------------------------request Details----------------------------------------",
        req.originalUrl
      );
      console.log("Req Type", req.method);
      console.log("Req IP", req.connection.remoteAddress);
      console.log("auth-token", req.headers["auth-token"]);
      console.log("authorization", req.headers["authorization"]);
      console.log("user-agent", req.headers["user-agent"]);
      console.log("Host", req.headers["host"]);
      if (process.env.NODE_ENV !== "production") {
        console.log("Req Body stringigy", JSON.stringify(req.body));
        console.log("Req body", req.body);
      }
      console.log("Req Params", req.params);
      console.log("Req Query", req.query);
      console.log(
        "-----------------------------------------ENDS------------------------------------------"
      );
      next();
    });
  }

  // Unexpected error handler
  private errorHandler(): void {
    this.app.use((err, req, res, next) => {
      console.error(err);
      res.status(err.status || CONSTANT.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
      return res.json({
        success: false,
        message: err.message,
        result: {},
        statusCode: err.status
      });
    });
  }
}

export default new App().server;
