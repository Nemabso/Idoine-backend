const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('./src/services/mongoose');
const reviewRouter = require('./src/routes/review');
const reviewTypeRouter = require('./src/routes/reviewType');
const userRouter = require('./src/routes/user');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

connectDB().catch(err => console.log(err));

app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, process.env.CLIENT_PATH)));

app.use('/api/review', reviewRouter);
app.use('/api/reviewType', reviewTypeRouter);
app.use('/api/user', userRouter);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, process.env.CLIENT_PATH, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server started at: http://localhost:${port}`);
})