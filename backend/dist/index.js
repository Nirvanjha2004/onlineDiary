"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("./routes/user");
const diaries_1 = require("./routes/diaries");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', user_1.userRouter);
app.use('/diary', diaries_1.diaryRouter);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
