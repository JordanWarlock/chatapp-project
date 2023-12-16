const express = require("express");
const { chats } = require("./Data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors =require("colors");
const userRoutes=require("./routes/userRoutes")
const {notFound,errorHandler}=require("../Backend/middlewares/errorMiddlerware")



const app = express();
dotenv.config();
connectDB();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on PORT ${PORT}`.yellow.bold));
