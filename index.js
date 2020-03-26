const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const port = process.env.PORT || 3000;

// MIDDLEWARE

app.set('view engine', 'pug');
app.use('/', express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Mongoose 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>
    console.log('DB IS CONNECTED')
);

// Main page

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// assets - expenses

// 1. amounts.filter()
// get the total of the calculation of assets - expenses
// 2. push it total variable
// 3. if total less or equal than budget, log = within budget
// if total more than budget, log = over budget
