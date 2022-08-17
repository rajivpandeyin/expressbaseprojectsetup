/**
 * @author Rajiv Pandey
 * @description This file used to creates global varialbles for the project. NOTE: If you are making a variable global then you have to be sure if that variable is worthy to be a global or not.
 */

const chalk = require('chalk');

const log = (...args) => {
    console.log(...args);
}

const logger = {}
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
export const initGlobals = (data: any = {}) => {
    (global as any).log = log;
    (global as any).logger = logger;
    (global as any).warning = (...args) => logs(chalk.yellow(typeof args == 'object' ? JSON.stringify(args) : args ));
    (global as any).db = (...args) => logs(chalk.green(typeof args == 'object' ? JSON.stringify(args) : args ));
    (global as any).info = (...args) => logs(chalk.blue(typeof args == 'object' ? JSON.stringify(args) : args ));
    (global as any).error = (...args) => logs(chalk.red(typeof args == 'object' ? JSON.stringify(args) : args ));
    // data.io.sockets.setMaxListeners(11); /////FOR NOW else change 11 with 0
    data.io.sockets.setMaxListeners(0);
    (global as any).io = data.io || null;
    (global as any).redisTokens = [];
    (global as any).callWindow = data.callWindow;
}
