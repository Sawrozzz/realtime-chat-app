import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";

import connectDB from "./db/connectdb.js";
import { app, server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.resolve("D:/Chat app/Frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..","Frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
