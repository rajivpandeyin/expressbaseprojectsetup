"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const i18n = require("i18n");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const config_1 = require("./config");
const index_route_1 = require("./routes/index.route");
const path = require("path");
const config_2 = require("./config");
//var docs = require("express-mongoose-docs");
class App {
    constructor() {
        this.initConfig = async () => {
            config_1.mongoDb.init();
            if (process.env.NODE_ENV !== "production")
                config_1.mongoDb.mongoDebug(false);
            config_1.mongoDb.mongoDebug(true);
        };
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.initDependency();
        this.routes(); //initialize all routes
        // bootInit(); //initialize bootstrap methods
        //initGlobals();
        this.initConfig();
    }
    initDependency() {
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
        this.app.use(expressSession({
            secret: "blogApp",
            resave: false,
            saveUninitialized: true,
            cookie: {
                secure: false
            }
        }));
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");
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
    routes() {
        this.app.get("/", (req, res) => {
            return res.send("Welcome to the blog App");
        });
        this.app.use(index_route_1.ApiRoutes.path, index_route_1.ApiRoutes.router);
        this.app.use((req, res) => {
            res
                .status(config_2.CONSTANT.HTTP_STATUS_CODE.URL_NOT_FOUND)
                .json(config_2.CONSTANT.HTTP_RESPONSED.INVALID_URL_RESPONSE);
        });
    }
    logger() {
        this.app.use(function (req, res, next) {
            res.locals.startTime = Date.now();
            console.log("--------------------------------request Details----------------------------------------", req.originalUrl);
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
            console.log("-----------------------------------------ENDS------------------------------------------");
            next();
        });
    }
    // Unexpected error handler
    errorHandler() {
        this.app.use((err, req, res, next) => {
            console.error(err);
            res.status(err.status || config_2.CONSTANT.HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR);
            return res.json({
                success: false,
                message: err.message,
                result: {},
                statusCode: err.status
            });
        });
    }
}
exports.default = new App().server;
//# sourceMappingURL=app.js.map