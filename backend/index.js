
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const db = require('./config/connection.js');
const tourRoute = require('./routes/tours.js');

const userRoute = require('./routes/users.js');

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;

// mongoose.set('strictQuery', false);

// const connect = async () => {
//     try {

//         await mongoose.connect(`mongodb+srv://elenavaleeva05:amerika08@cluster0.0nh5tgp.mongodb.net/?retryWrites=true&w=majority`, {

//         })
//         console.log('MongoDB Connected to database');

//     } catch (err) {
//         console.log("Mongodb connection error");
//     }
// }



app.get('/', (req, res) => {
    res.send('api is working');
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/tours', tourRoute);
app.use('/users', userRoute);

db.once('open', () => {
    app.listen(port, () => {
        // connect();
        console.log(`Server is running on port ${port}`);
    })
});