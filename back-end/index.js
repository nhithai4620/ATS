const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth");

var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));
app.use(cookieParser());

dotenv.config();

mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log("Connected to mongoDB")
})

app.get("/api",(req,res)=>{
    res.status(200).json("hello");
})

app.use("/api/v1/auth", authRouter);

app.listen(3000, () =>{
    console.log("Server is running");
})