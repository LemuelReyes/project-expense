const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// MIDDLEWARE

app.set('view engine', 'pug');

// READ

router.get('/', async(req,res) => {
    try {
        const documents = await Expenses.find();
    // budget 
        const budgets = documents.filter(expense => expense.budget);
    // expense, expenseAmount, asset, assetAmount
        const reports = documents.filter(expense => !expense.budget);
    
    // access documents   
    const expenses = documents.map(report => report);
    console.log(expenses)

    //calculates budget 
    const budget = expenses.filter(number => number.budget)        
    const budgetTotal = Number(budget[0].budget)
    console.log(`Your budget is: ${budgetTotal}`)

    // calculates expenses
    const expenseNumber = expenses.reduce(function(prev, current){
        if(current.expenseAmount) {
            return prev += Number(current.expenseAmount)
        }
        return prev
    }, 0)

    console.log('Expense total:', expenseNumber)

    // calculates assets
    const assetNumber = expenses.reduce(function(prev, current){
        if(current.assetAmount) {
            return prev += Number(current.assetAmount)
        }
        return prev
    }, 0)

    console.log('Asset total:', assetNumber)

    // calculates total
    let calculateTotal = function(budgetTotal, expenseNumber, assetNumber) {
 
        if(assetNumber > expenseNumber) {
            return budgetTotal + assetNumber - expenseNumber
        } else if(expenseNumber > assetNumber) {
            return budgetTotal + assetNumber - expenseNumber
        } else if(!assetNumber || !expenseNumber) {
            return budgetTotal
        }
    }
    
    let historyTotal = calculateTotal(budgetTotal, expenseNumber, assetNumber)

    // calculates balance

    const calculateBalance = function(budgetTotal, assetNumber, expenseNumber) {

    // budget + income - expenses = net income
        
        if(budgetTotal + assetNumber - expenseNumber <= 0) {
            return `You are over budget`
        } else if(budgetTotal + assetNumber - expenseNumber > 0){
            return `You are within budget`
        }    
    }

    const balance = calculateBalance(budgetTotal, assetNumber, expenseNumber)
    console.log(balance)
  
    // render
    res.render('index', { expenseReport: reports, budgets: budgets, historyTotal, balance })
    } catch(err) {
        res.json({ message: err});
    }
});

// CREATE
router.post('/reportBudget', async (req,res) => {

    try {
        const reportBudget = {
            budget: req.body.budget,
            expense: req.body.expense,
            expenseAmount: req.body.expenseAmount,
            asset: req.body.asset,
            assetAmount: req.body.assetAmount
        };
        const saveReport = new Expenses(reportBudget);
        await saveReport.save();
        res.redirect('/');

    } catch(err) {
        res.render({ message: err});
    }
});

// DELETE

router.get('/delete/:postId', async(req, res) => {
    try {
        await Expenses.deleteOne({ _id: req.params.postId });
        res.redirect('/');
    } catch(err) {
        res.json({ message: err })
    }
});

module.exports = router;