"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
//import { PORT } from './config/environment';
const port = 3000;
app_1.default.listen(port, function () {
    console.log('Server listening on port ' + port);
});
// 45000 ms request timeout
app_1.default.timeout = 45000;
//# sourceMappingURL=server.js.map