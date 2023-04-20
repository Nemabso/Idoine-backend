const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Review = require('./src/models/review');
const { connectDB } = require('./src/services/mongoose');
const reviewRouter = require('./src/routes/review');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));

connectDB().catch(err => console.log(err));

app.use(express.json());
app.use('/api/review', reviewRouter);

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
})