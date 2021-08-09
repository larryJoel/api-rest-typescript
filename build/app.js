"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./swaggerOptions");
const task_router_1 = __importDefault(require("./routers/task.router"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(cors_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
const specs = swagger_jsdoc_1.default(swaggerOptions_1.options);
app.use(task_router_1.default);
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
exports.default = app;
