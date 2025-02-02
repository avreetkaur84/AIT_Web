import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();

// middlewares start with app.use
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Backend is working");
})

export {app}