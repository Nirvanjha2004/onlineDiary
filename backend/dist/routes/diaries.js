"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diaryRouter = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const prisma = new client_1.PrismaClient();
exports.diaryRouter = express_1.default.Router();
exports.diaryRouter.use((0, cookie_parser_1.default)());
// diaryRouter.use('/*', async (req, res, next)=>{
//     //Logic for verifying the user
//     const authHeader = req.header('Authorization') || "";
//     const verifiyUser = jwt.verify(authHeader, "secretkey");
//     if(!verifiyUser){
//         console.log("User can not be verified");
//     }
//     next();
// })
exports.diaryRouter.get('/getall', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get the id from the body and search for that in the database
    // return the list of all the diaries the user has created
    console.log("command reached here");
    try {
        const id = Number(req.cookies.userId);
        console.log(id);
        const userFound = yield prisma.user.findFirst({
            where: {
                id
            }
        });
        const userId = userFound === null || userFound === void 0 ? void 0 : userFound.id;
        const diaries = yield prisma.diary.findMany({
            where: {
                userId
            },
            select: {
                content: true,
                title: true,
                theme: true,
                done: true
            }
        });
        console.log(diaries);
        res.json({
            message: "Diary Extracted",
            diaries
        });
    }
    catch (error) {
        console.log(error);
    }
}));
exports.diaryRouter.post('/entries/save', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get the id from the body and search for that in the database)
    // Add one new entry in the diary database
    //const userId = Number(req.cookies.userId);
    const { theme, content, title, done, userId } = req.body;
    const updatedDiaries = yield prisma.diary.create({
        data: {
            content,
            title,
            theme,
            done,
            userId
        }
    });
}));
exports.diaryRouter.post('/createNew', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // get the id from the body and search for that in the database
    // Add one new entry in the diary database
    const userId = Number(req.cookies.userId);
    const { theme, content, title, done } = req.body;
    const updatedDiaries = yield prisma.diary.create({
        data: {
            content,
            title,
            theme,
            done,
            userId
        }
    });
}));
exports.diaryRouter.post('/new/:theme', (req, res) => {
    const theme = req.query; //Extract the theme from the query param
    //Logic
    res.send(JSON.stringify(theme)); //check
    res.json({
        "Theme": theme,
        theme
    });
});
