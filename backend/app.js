require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const productRoutes = require('./routes/productRoutes');
const purchaseRoutes = require('./routes/purchaseRoutes');
const userRoutes = require('./routes/userRoutes');

const cors = require('cors');

app.use(cors());

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;

// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

db.on('error', (error) => {
    console.log(error);
});

db.once('connected', () => {
    console.log('Database connected.');
});

app.use(express.json());
app.use('/product/', productRoutes);
app.use('', purchaseRoutes);
app.use('', userRoutes);

app.listen(3001, () => {
    console.log(`Listening at port ${3001}`);
});