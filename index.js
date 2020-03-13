const express = require('express')
const app = express()
const mongodb = require('mongodb')
let db

let connectionString = 'mongodb+srv://LemuelReyes:expenseapp@cluster0-c3pbt.mongodb.net/FamExpenseApp?retryWrites=true&w=majority'
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
   db = client.db()
   app.listen(3000)
})

app.set('view engine', 'pug');
app.use('/', express.static('public'));
app.use(express.urlencoded({extended: false}))


app.get('/', function(req, res){
    res.render('index')
})

app.post('/budget', function(req, res){
    console.log(req.body.budget)
    res.send(`Your budget is: ${req.body.budget}`)
})

app.post('/expense', function(req, res){
    db.collection('Expenses').insertOne({expense: req.body.expenseName, amount: req.body.expenseAmount}, function(){
        res.send(`Thanks for submitting your expense.`)
    })
})

app.post('/asset', function(req, res){
    console.log(req.body.expenseName, req.body.expenseAmount)
    
    res.send(`Asset: ${req.body.assetName}, Amount: ${req.body.assetAmount} `)
})

