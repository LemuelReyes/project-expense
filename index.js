const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

// Mongoose 
const mongoose = require('mongoose');
let uri = 'mongodb+srv://LemuelReyes:expenseapp@cluster0-c3pbt.mongodb.net/FamExpenseApp?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose model

const expenses = mongoose.model('Expenses', {
    budget: String
});

// View is Pug for frontend
app.set('view engine', 'pug');
app.use('/', express.static('public'));
app.use(express.urlencoded({extended: false}))

// Main page
app.get('/', async (req, res) => {

    const documents = await expenses.find().exec();

    const indexVariables = {
        expenses: documents
    }

    console.log(indexVariables)

        res.render('index', { numbers: indexVariables});
    })  


// app.get('/delete:id', async (req, res) => {
//     const itemDelete = req.params.id
//     const document = await expenses.findById(itemDelete).exec();
// })

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


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// assets - expenses

// 1. amounts.filter()
// get the total of the calculation of assets - expenses
// 2. push it total variable
// 3. if total less or equal than budget, log = within budget
// if total more than budget, log = over budget
