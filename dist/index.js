"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connection_1 = require("./db/connection");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const jobRoutes_1 = __importDefault(require("./routes/jobRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const Port = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/auth', authRoutes_1.default);
app.use('/api/job', jobRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
const __dirname1 = path_1.default.resolve();
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static(path_1.default.join(__dirname1, "/client/dist")));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname1, "client", "dist", "index.html"));
    });
}
app.listen(Port, () => {
    console.log(`Server Started on Port : ${Port}`);
});
connection_1.connection.once('open', () => {
    console.log('Connected to Database');
});
