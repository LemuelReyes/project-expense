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

// IMPORT ROUTES

const expensesRoute = require('./routes/expenses');
app.use('/', expensesRoute)

// MONGOOSE

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>
    console.log('DB IS CONNECTED')
);

// LISTEN TO SERVER

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

