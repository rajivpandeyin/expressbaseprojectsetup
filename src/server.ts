import app from "./app";
//import { PORT } from './config/environment';
const port = 3200;

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

// 45000 ms request timeout
app.timeout = 45000;