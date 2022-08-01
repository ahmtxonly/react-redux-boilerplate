"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
const port = 4000;
app.use(cors());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const user = {
    username: "test",
    password: "test"
};
app.get('/', (req, res) => {
    res.send('Hello, welcome to boilerplate api service');
});
app.post('/login', (req, res) => {
    if (req.body.username === user.username && req.body.password === user.password) {
        res.json({
            status: "success",
            message: "login success"
        });
    }
    else {
        res.status(400).json({
            status: "error",
            message: "login failed"
        });
    }
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
