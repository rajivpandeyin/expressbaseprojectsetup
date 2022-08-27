"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRoute = void 0;
const express_1 = require("express");
class BaseRoute {
    constructor() {
        /**
         * Constructor
         *
         * @class BaseRoute
         * @constructor
         */
        this.router = (0, express_1.Router)();
    }
}
exports.BaseRoute = BaseRoute;
//# sourceMappingURL=baseRoute.js.map