const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const Review = require('./src/models/review');
const { connectDB } = require('./src/services/mongoose');

const port = process.env.PORT || 5000;

const app = express();

const reviewRouter = require('./src/routes/review');

connectDB().catch(err => console.log(err));

app.use(express.json());
app.use('/review', reviewRouter);

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
})