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

// IMPORT ROUTES

const home = require('./routes/home');
const createThis = require('./routes/create');
const updateThis = require('./routes/update');
const deleteThis = require('./routes/delete');

// ROUTES

app.use('/', home);
app.use('/', createThis)
app.use('/', updateThis);
app.post('/delete/:id', deleteThis);

// MONGOOSE
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
    app.listen(port)
});
  

// LISTEN TO SERVER

// app.listen(3000, () => {
//     console.log(`Server running on port ${3000}`);
// });

