import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'
import postRouter from "./routes/posts.js";


const app = express();
dotenv.config();

const PORT = process.env.PORT
const URL = process.env.CONNECTION_URL

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    try {
        app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
    } catch (err) {
        console.error(err)
    }


app.use(express.json({ limit : "30mb", extended: true }))
app.use(express.urlencoded({ limit : "30mb", extended: true }))
app.use(cors());
app.use("/posts", postRouter)
