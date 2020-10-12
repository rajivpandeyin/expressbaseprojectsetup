"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_URL = exports.ENC = exports.SALT = exports.PORT = exports.MONGODB_PORT = exports.MONGODB_HOST = exports.MONGODB_DATABASE = exports.MONGODB_PASSWORD = exports.MONGODB_USER = exports.MONGODB_URI = exports.ENVIRONMENT = void 0;
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
exports.ENVIRONMENT = process.env.NODE_ENV;
switch (exports.ENVIRONMENT) {
    case "development": {
        if (fs.existsSync(path.join(__dirname, "../../.env.development"))) {
            dotenv.config({ path: ".env.development" });
        }
        else {
            process.exit(1);
        }
        break;
    }
    case "testing": {
        if (fs.existsSync(path.join(__dirname, "../../.env.testing"))) {
            dotenv.config({ path: ".env.testing" });
        }
        else {
            process.exit(1);
        }
        break;
    }
    case "staging": {
        if (fs.existsSync(path.join(__dirname, "../../.env.staging"))) {
            dotenv.config({ path: ".env.staging" });
        }
        else {
            process.exit(1);
        }
        break;
    }
    case "production": {
        if (fs.existsSync(path.join(__dirname, "../../.env.production"))) {
            dotenv.config({ path: ".env.production" });
        }
        else {
            process.exit(1);
        }
        break;
    }
    default: {
        if (fs.existsSync(path.join(__dirname, "../../.env.local"))) {
            dotenv.config({ path: ".env.local" });
        }
        else {
            process.exit(1);
        }
    }
}
exports.MONGODB_URI = process.env["MONGODB_URI"];
exports.MONGODB_USER = process.env["MONGODB_USER"];
exports.MONGODB_PASSWORD = process.env["MONGODB_PASSWORD"];
exports.MONGODB_DATABASE = process.env["MONGODB_DATABASE"];
exports.MONGODB_HOST = process.env["MONGODB_HOST"];
exports.MONGODB_PORT = process.env["MONGODB_PORT"];
exports.PORT = process.env["PORT"];
exports.SALT = process.env["SALT"];
exports.ENC = process.env["ENC"];
exports.BASE_URL = process.env["baseURL"];
//# sourceMappingURL=environment.js.map