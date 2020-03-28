const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// MIDDLEWARE

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// IMPORT ROUTES

const home = require('./routes/home');
app.use('/', home)


// ROUTES
app.get('/', (req,res) => {
    res.render('index')
});

// MONGOOSE
console.log(process.env.DB_CONNECTION)
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, ()=>
console.log('DB IS CONNECTED'));

// LISTEN TO SERVER

app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
});

