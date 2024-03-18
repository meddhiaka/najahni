import express, { Express, Request, Response } from 'express'
import router from './router'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.get('/', (req: Request, res: Response) => {
    res.json({ msg: "hello" })
})

app.use('/v1/api', router)

export default app