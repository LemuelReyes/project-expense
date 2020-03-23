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
    db.collection('Expenses').find().toArray(function(err, expenses){
        
        // calculates expenses
        const expenseNumber = expenses.reduce(function(prev, current){
            if(current.expenseAmount) {
                return prev += Number(current.expenseAmount)
            }
            return prev
        }, 0)

        console.log('Expense total:', expenseNumber)

        //calculates assets
        const assetNumber = expenses.reduce(function(prev, current){
            if(current.assetAmount) {
                return prev += Number(current.assetAmount)
            }
            return prev
        }, 0)

        console.log('Asset total:', assetNumber)

        //calculates total
        let calculateTotal = function(expenseNumber, assetNumber) {
            if(assetNumber > expenseNumber) {
                return (`Total: +${assetNumber - expenseNumber}`)
            } else if(expenseNumber > assetNumber) {
                return (`Total: -${expenseNumber - assetNumber}`) 
            }
        }
        
        let total = calculateTotal(expenseNumber, assetNumber)

        res.render('index', {expenses: expenses, total})
    })  
})

app.post('/budget', function(req, res){
    db.collection('Expenses').insertOne({budget: req.body.budget}, function(){
        res.redirect('/')
    })
})

app.post('/expense', function(req, res){
    db.collection('Expenses').insertOne({expense: req.body.expenseName, expenseAmount: req.body.expenseAmount}, function(){
        res.redirect('/')
    })
})

app.post('/asset', function(req, res){
    db.collection('Expenses').insertOne({asset: req.body.assetName, assetAmount: req.body.assetAmount}, function(){
    
    res.redirect('/')
    })
})

// assets - expenses

// 1. amounts.filter()
// get the total of the calculation of assets - expenses
// 2. push it total variable
// 3. if total less or equal than budget, log = within budget
// if total more than budget, log = over budget
