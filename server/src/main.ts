import app from "./server";
import dotenv from "dotenv"
dotenv.config()

app.listen(process.env.PORT, () => {
    console.log(`running: http://localhost:${process.env.PORT}`)
})