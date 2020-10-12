import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

export const ENVIRONMENT = process.env.NODE_ENV;

switch (ENVIRONMENT) {
    case "development": {
        if (fs.existsSync(path.join(__dirname, "../../.env.development"))) {
            dotenv.config({ path: ".env.development" });
        } else {
            process.exit(1);
        }
        break;
    }

    case "testing": {
        if (fs.existsSync(path.join(__dirname, "../../.env.testing"))) {
            dotenv.config({ path: ".env.testing" });
        } else {
            process.exit(1);
        }
        break;
    }
    case "staging": {
        if (fs.existsSync(path.join(__dirname, "../../.env.staging"))) {
            dotenv.config({ path: ".env.staging" });
        } else {
            process.exit(1);
        }
        break;
    }

    case "production": {
        if (fs.existsSync(path.join(__dirname, "../../.env.production"))) {
            dotenv.config({ path: ".env.production" });
        } else {
            process.exit(1);
        }
        break;
    }
    default: {

        if (fs.existsSync(path.join(__dirname, "../../.env.local"))) {
            dotenv.config({ path: ".env.local" });
        } else {
            process.exit(1);
        }
    }
}

export const MONGODB_URI = process.env["MONGODB_URI"];
export const MONGODB_USER = process.env["MONGODB_USER"];
export const MONGODB_PASSWORD = process.env["MONGODB_PASSWORD"];
export const MONGODB_DATABASE = process.env["MONGODB_DATABASE"]

export const MONGODB_HOST = process.env["MONGODB_HOST"];
export const MONGODB_PORT= process.env["MONGODB_PORT"]

export const PORT = process.env["PORT"];
export const SALT = process.env["SALT"];
export const ENC = process.env["ENC"];
export const BASE_URL = process.env["baseURL"];
