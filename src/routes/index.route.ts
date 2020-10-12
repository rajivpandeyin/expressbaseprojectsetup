import { BaseRoute } from './baseRoute';
export class ApiRoutes extends BaseRoute {
    public static path = '/api';
    private static instance: ApiRoutes;

    private constructor() {
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

    private init() {
        // Route handler for default route
        this.router.use("/", async (req, res) => {
            console.log("sdsads");
            res.send("Api url");
        });
    }
}