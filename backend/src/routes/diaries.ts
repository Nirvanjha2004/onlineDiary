import { PrismaClient } from '@prisma/client'
import express, { query } from 'express'
import cookieParser from 'cookie-parser';

const prisma = new PrismaClient();
export const diaryRouter = express.Router()
diaryRouter.use(cookieParser());

diaryRouter.use('/*', (req, res)=>{
    //Logic for verifying the user
})

diaryRouter.get('/getall', async (req, res)=>{
    // get the id from the body and search for that in the database
    // return the list of all the diaries the user has created
    console.log("command reached here")

    try {
        const id = Number(req.cookies.userId);
        console.log(id);
        const userFound = await prisma.user.findFirst({
            where:{
                id
            }
        })
        
        const userId = userFound?.id;
    
        const diaries = await prisma.diary.findMany({
            where:{
                userId
            },
            select:{
                content: true,
                title: true,
                theme: true,
                done: true
            }
        })
        console.log(diaries);
        res.json({
            message : "Diary Extracted",
            diaries
        })
    } catch (error) {
        console.log(error)
    }
})

diaryRouter.post('/createNew', async (req, res)=>{
    // get the id from the body and search for that in the database
    // Add one new entry in the diary database
    const userId = Number(req.cookies.userId);
    const {theme, content, title, done} = req.body; 
    const updatedDiaries = await prisma.diary.create({
        data:{
            content, 
            title,
            theme, 
            done,
            userId
        }
    })
})

diaryRouter.post('/new/:theme', (req, res)=>{
    const theme = req.query //Extract the theme from the query param
    //Logic

    res.send(JSON.stringify(theme)); //check
    res.json({
        "Theme": theme,
        theme
    });
})