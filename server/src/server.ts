import express, { Express, Request, Response } from 'express'
import router from './router'
import cors from 'cors'

const app: Express = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req: Request, res: Response) => {
    res.json({ msg: "hello" })
})

app.use('/v1/api', router)

export default app