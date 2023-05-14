
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const db = require('./config/connection.js');
const tourRoute = require('./routes/tours.js');

const userRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');
const reviewRoute = require('./routes/review.js');
const corsOptions = {
    origin: true,
    credentials: true
}

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.send('api is working');
});

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);


db.once('open', () => {
    app.listen(port, () => {
        connect();
        console.log(`Server is running on port ${port}`);
    })
});