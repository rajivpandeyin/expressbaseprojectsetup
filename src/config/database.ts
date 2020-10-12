import * as mongoose from "mongoose";
import { MONGODB_PASSWORD, MONGODB_USER , MONGODB_DATABASE, MONGODB_PORT , MONGODB_HOST } from "./environment"

class Database {
    private username: string;
    private password: string;
    private database: string; 
    private port: string;
    private host: string;
    private uri: string;


    constructor() {
        this.database = MONGODB_DATABASE;
        this.username = MONGODB_USER;
        this.password = MONGODB_PASSWORD;
        this.port = MONGODB_PORT;
        this.host = MONGODB_HOST;

        if (this.username && this.password) {
            this.uri = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOST}:${this.port}/${this.database}`;
        } else {
            this.uri = `mongodb://${MONGODB_HOST}:${this.port}/${this.database}`;
        }
    }

    init = async () => {
        if (this.host && this.port && this.database && this.username && this.password) {
                mongoose
                    .connect( this.uri , { 
                    auth: {
                                user: MONGODB_USER,
                                password: MONGODB_PASSWORD,
                            },
                            useNewUrlParser: true ,
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
        } else if (this.host && this.port && this.database) {
            mongoose
            .connect( this.uri , {
                    useNewUrlParser: true ,
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
        } else {
            console.log("Please define host, port and database name to connect to ther database");
        }
    }

    mongoDebug = async (status: boolean) => {
        status ? mongoose.set("debug", true) :  mongoose.set("debug", false);
    }
} 

export const mongoDb = new Database();