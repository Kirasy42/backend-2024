// import dotenv dan jalankan method config
// require("dotenv").config();
import dotenv from 'dotenv';
dotenv.config();

// destructing object process.env
const { APP_PORT } = process.env;

// import express and router
// const express = require("express");
import express from 'express';
// const router = require("./routes/api");
import router from "./routes/api.js";

// buat object express
const app = express();

// menggunakan middleware
app.use(express.json());

// menggunakan router
app.use(router);

// mendefinisikan port
app.listen(APP_PORT);
