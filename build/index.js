"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const task_router_1 = __importDefault(require("./routers/task.router"));
const db_1 = require("./db");
db_1.createConnection();
app_1.default.listen(app_1.default.get('port'));
app_1.default.use(task_router_1.default);
console.log('Server listening or port 3000');
