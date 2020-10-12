"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRoutes = void 0;
const baseRoute_1 = require("./baseRoute");
class ApiRoutes extends baseRoute_1.BaseRoute {
    constructor() {
        super();
        this.init();
    }
    static get router() {
        //applying singleton method to create only one instance of the router class
        if (!ApiRoutes.instance) {
            ApiRoutes.instance = new ApiRoutes();
        }
        return ApiRoutes.instance.router;
    }
    init() {
        // Route handler for default route
        this.router.use("/", async (req, res) => {
            console.log("sdsads");
            res.send("Api url");
        });
    }
}
exports.ApiRoutes = ApiRoutes;
ApiRoutes.path = '/api';
//# sourceMappingURL=index.route.js.map