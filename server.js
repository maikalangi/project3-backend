// env vars
require('dotenv').config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
// dependencies
const express = require('express');
const app = express();
const cors = require('cors')
const morgan = require('morgan');
const mongoose = require('mongoose');

// models and controllers
const productsController = require('./controllers/products');

// mongodb connection
mongoose.connect(MONGO_URL)
mongoose.connection
    .on("open", () => console.log(MONGO_URL))
    .on("close", () => console.log("mongoose disconnected"))
    .on("error", (error) => console.log(error))

// middleware
app.use(cors());
app.use(morgan('dev'));

// routes and controllers
app.get('/', (req, res) => res.send('This is the General Store'));
app.use('/products', productsController);

// Listener
app.listen(PORT, () => console.log(`Listening...`));