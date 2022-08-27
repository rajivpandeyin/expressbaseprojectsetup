"use strict";
/**
 * @author Rajiv Pandey
 * @description This file used to creates global varialbles for the project. NOTE: If you are making a variable global then you have to be sure if that variable is worthy to be a global or not.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGlobals = void 0;
const chalk = require('chalk');
const log = (...args) => {
    console.log(...args);
};
const logger = {};
/*
new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            level: process.env.NODE_ENV === "production" ? "error" : "debug"
        }),
        new (winston.transports.File)({
            filename: "debug.log", level: "debug"
        })
    ]
})*/
/** this library used for the color fully debugging the code */
const logs = console.log;
//making varialbles accessible throughout the project
const initGlobals = (data = {}) => {
    global.log = log;
    global.logger = logger;
    global.warning = (...args) => logs(chalk.yellow(typeof args == 'object' ? JSON.stringify(args) : args));
    global.db = (...args) => logs(chalk.green(typeof args == 'object' ? JSON.stringify(args) : args));
    global.info = (...args) => logs(chalk.blue(typeof args == 'object' ? JSON.stringify(args) : args));
    global.error = (...args) => logs(chalk.red(typeof args == 'object' ? JSON.stringify(args) : args));
    // data.io.sockets.setMaxListeners(11); /////FOR NOW else change 11 with 0
    data.io.sockets.setMaxListeners(0);
    global.io = data.io || null;
    global.redisTokens = [];
    global.callWindow = data.callWindow;
};
exports.initGlobals = initGlobals;
//# sourceMappingURL=globals.js.map