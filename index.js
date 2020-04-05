const express = require('express')
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

let port = process.env.PORT
if(port == null || port =="") {
    port = 3000
}

// MIDDLEWARE

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER
const router = require('./routes') 
app.use('/', router)

// MONGOOSE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    app.listen(port)
});