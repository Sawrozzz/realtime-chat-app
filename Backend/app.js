import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import cors from "cors";


import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./db/connectdb.js";
import {app, server} from './socket/socket.js';

const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users",userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(PORT, () => {
 connectDB()
  console.log(`Server is running on port ${PORT}`);
});
