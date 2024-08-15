import { PrismaClient } from "@prisma/client";
import express from "express";
import jwt from "jsonwebtoken";

import cookieParser from 'cookie-parser';


// Doing authentication using AuthHeader
export const userRouter = express.Router();
const prisma = new PrismaClient(); 
userRouter.use(cookieParser());

userRouter.post("/signup", async (req, res) => {
  try {
    const { username, password, email, firstName, lastName } = await req.body;
    const createduser = await prisma.user.create({
      data: {
        email,
        username,
        password,
        firstName,
        lastName,
      },
    });

    if (!createduser) console.log("Not able to create user");

    console.log(createduser);
    res.cookie('userId', createduser.id); 
    return res.status(200).json(createduser);
  } catch (error) {
    console.log(error);
  }
});

/*
The issue you're facing is because headers are not persisted between requests on the server side unless explicitly managed. When you set a header in one request (/signup), it won't automatically carry over to the next request (/update). Each HTTP request is stateless, meaning headers set in one request aren't accessible in the next one without some form of state management. */

userRouter.put("/update", async (req, res) => {
  //Take the userId find it in the prisma and update the details
  try {
    const { username, email, password, firstName, lastName } = req.body;
    console.log(username);
    const id = Number(req.cookies.userId);
    console.log("id", id);
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },

      data: {
        username,
        email,
        password,
        firstName,
        lastName,
      },
    });

    console.log(updatedUser);
    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
  }
});

userRouter.post("/signin", async (req, res) => {
  const { username, password } = await req.body;
  const verifiedUser = await prisma.user.findUnique({
    where: {
      username,
    },
  });
  if (!verifiedUser)
    res.status(400).json({
      message: "You need to Sign Up first!",
    });
  const token = jwt.sign(username, "privatekey");
//   localStorage.setItem("AuthToken",token); Can not use it because localStorage is available on the client side and not on the server side
//   we have to get the token on the client side and set it when sign in button is clicked
  return res.json({
    message : "Signed IN successfully!",
    token
  });
});


userRouter.post('/signout', (req, res)=>{
    //Get the header or the cookie and delete it or set it to empty string
    //Sign out routes are handled on the client side....it just removes from localstorage
})

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
