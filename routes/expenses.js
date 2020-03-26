const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// MIDDLEWARE
app.set('view engine', 'pug');

router.get('/', (req, res) => {
    res.render('index')
});

module.exports = router;

// app.post('/budget', function(req, res){
//     db.collection('Expenses').insertOne({budget: req.body.budget}, function(){
//         res.redirect('/')
//     })
// })

// app.post('/expense', function(req, res){
//     db.collection('Expenses').insertOne({expense: req.body.expenseName, expenseAmount: req.body.expenseAmount}, function(){
//         res.redirect('/')
//     })
// })

// app.post('/asset', function(req, res){
//     db.collection('Expenses').insertOne({asset: req.body.assetName, assetAmount: req.body.assetAmount}, function(){
    
//     res.redirect('/')
// })