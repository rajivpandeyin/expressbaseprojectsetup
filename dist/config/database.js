"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoDb = void 0;
const mongoose = require("mongoose");
const environment_1 = require("./environment");
class Database {
    constructor() {
        this.init = async () => {
            if (this.host && this.port && this.database && this.username && this.password) {
                mongoose
                    .connect(this.uri, {
                    auth: {
                        user: environment_1.MONGODB_USER,
                        password: environment_1.MONGODB_PASSWORD,
                    },
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                })
                    .then(() => {
                    console.info("Connected to the database");
                })
                    .catch(err => {
                    console.error("Error in connecting to the database");
                    process.exit();
                });
            }
            else if (this.host && this.port && this.database) {
                mongoose
                    .connect(this.uri, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true,
                    useFindAndModify: false
                })
                    .then(() => {
                    console.info("Connected to the database");
                })
                    .catch(err => {
                    console.error("Error in connecting to the database");
                    process.exit();
                });
            }
            else {
                console.log("Please define host, port and database name to connect to ther database");
            }
        };
        this.mongoDebug = async (status) => {
            status ? mongoose.set("debug", true) : mongoose.set("debug", false);
        };
        this.database = environment_1.MONGODB_DATABASE;
        this.username = environment_1.MONGODB_USER;
        this.password = environment_1.MONGODB_PASSWORD;
        this.port = environment_1.MONGODB_PORT;
        this.host = environment_1.MONGODB_HOST;
        if (this.username && this.password) {
            this.uri = `mongodb://${environment_1.MONGODB_USER}:${environment_1.MONGODB_PASSWORD}@${environment_1.MONGODB_HOST}:${this.port}/${this.database}`;
        }
        else {
            this.uri = `mongodb://${environment_1.MONGODB_HOST}:${this.port}/${this.database}`;
        }
    }
}
exports.mongoDb = new Database();
//# sourceMappingURL=database.js.map