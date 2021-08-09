import app from "./app";
import taskRoute from "./routers/task.router";
import { createConnection } from "./db";

createConnection();

app.listen(app.get('port'));

app.use(taskRoute)

console.log('Server listening or port 3000')