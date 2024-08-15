import express from 'express'
import { userRouter } from './routes/user'
import { diaryRouter } from './routes/diaries'
const app = express()
const port = 3000

app.use(express.json())

app.use('/api', userRouter);
app.use('/diary', diaryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})