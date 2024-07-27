import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js"
import connectMongoDB from "./connection.js";
import logReqRes from "./middlewares/index.js";

const app = express()
const PORT = 8000


// connection
connectMongoDB("mongodb://127.0.0.1:27017/khushi-log-details")


// middlewares
app.use(express.urlencoded({extended : false}))
app.use(logReqRes("log.txt"))


// routes
app.use("/users", userRouter)


// server
app.listen(PORT, () => {
    console.log("server started at port : ", PORT);
})