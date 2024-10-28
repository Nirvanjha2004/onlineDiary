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
exports.userRouter = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Doing authentication using AuthHeader
exports.userRouter = express_1.default.Router();
const prisma = new client_1.PrismaClient();
exports.userRouter.use((0, cookie_parser_1.default)());
exports.userRouter.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, emailVerified } = yield req.body;
        const createduser = yield prisma.user.create({
            data: {
                email,
                Name: name,
                emailVerified: emailVerified,
            },
        });
        if (!createduser)
            console.log("Not able to create user");
        console.log(createduser);
        res.cookie('userId', createduser.id);
        return res.status(200).json(createduser);
    }
    catch (error) {
        console.log(error);
    }
}));
/*
The issue you're facing is because headers are not persisted between requests on the server side unless explicitly managed. When you set a header in one request (/signup), it won't automatically carry over to the next request (/update). Each HTTP request is stateless, meaning headers set in one request aren't accessible in the next one without some form of state management. */
exports.userRouter.put("/update", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Take the userId find it in the prisma and update the details
    try {
        const { email, name } = req.body;
        console.log(name);
        const id = Number(req.cookies.userId);
        console.log("id", id);
        const updatedUser = yield prisma.user.update({
            where: {
                id,
            },
            data: {
                email,
                Name: name,
            },
        });
        console.log(updatedUser);
        return res.status(200).json(updatedUser);
    }
    catch (error) {
        console.log(error);
    }
}));
exports.userRouter.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, emailVerified } = req.body;
    try {
        // Use Prisma to save or update the user in the database
        const user = yield prisma.user.upsert({
            where: { email: email }, //The error occurs because your Prisma schema likely has id as the primary key, and Prisma expects an id to uniquely identify the user when using the upsert() method. To use email as the unique identifier in where, you'll need to ensure that email is marked as @unique in your Prisma schema.
            update: { Name: name, emailVerified: emailVerified },
            create: { Name: name, email: email, emailVerified: emailVerified },
        });
        res.status(200).json({ message: "User saved successfully", user });
    }
    catch (error) {
        console.error("Error saving user data:", error);
        res.status(500).json({ error: "Error saving user data" });
    }
    // const token = jwt.sign(username, "privatekey");
    //   localStorage.setItem("AuthToken",token); Can not use it because localStorage is available on the client side and not on the server side
    //   we have to get the token on the client side and set it when sign in button is clicked
    return res.json({
        message: "Signed IN successfully!",
        // token
    });
}));
exports.userRouter.post('/signout', (req, res) => {
    //Get the header or the cookie and delete it or set it to empty string
    //Sign out routes are handled on the client side....it just removes from localstorage
});
/*
Yes, you can use a username and password to generate a JWT (JSON Web Token) when a user signs in. The process typically involves the following steps:

User Submits Credentials: The user sends their username and password to the server via a login form.

Server Authenticates User: The server verifies the credentials by checking the username and password against the stored data (e.g., in a database).

Generate JWT: If the credentials are correct, the server generates a JWT. This token usually contains:

Header: Specifies the algorithm used to sign the token (e.g., HS256).
Payload: Contains claims, which are statements about an entity (typically, the user). Common claims include the user ID, username, and roles/permissions.
Signature: The header and payload are signed with a secret key to ensure the token's integrity.
Send JWT to User: The server sends the JWT back to the client (e.g., in the response body or as a cookie).

Use JWT for Authentication: The client stores the JWT (e.g., in local storage or as a cookie) and sends it with subsequent requests to authenticate and authorize access to protected resources.
*/
