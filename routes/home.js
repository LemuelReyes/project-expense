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

    // Budget value
    const budgets = documents.filter(expense => expense.budget);
    const budgetInitialRender = (budgets.length) ? budgets[0].budget : 0;

    // Access expense, expenseAmount, asset, assetAmount documents
    const reports = documents.filter(expense => !expense.budget);

    // Access documents   
    const expenses = documents.map(report => report);
    
    // Calculates the total of budget
    const budget = expenses.filter(number => number.budget)        

    const budgetTotal = ( budget.length ) ? Number(budget[0].budget) : 0;
    
    console.log(`Your budget is: ${budgetTotal}`)

    // Calculates the expenses
    const expenseNumber = expenses.reduce(function(prev, current){
        if(current.expenseAmount) {
            return prev += Number(current.expenseAmount)
        }
        return prev
    }, 0)

    console.log('Expense total:', expenseNumber)

    // Calculates the assets
    const assetNumber = expenses.reduce(function(prev, current){
        if(current.assetAmount) {
            return prev += Number(current.assetAmount)
        }
        return prev
    }, 0)

    console.log('Asset total:', assetNumber)

    // Calculates total
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

    // Calculates balance

    const calculateBalance = function(budgetTotal, assetNumber, expenseNumber) {        
        if(budgetTotal + assetNumber - expenseNumber === 0) {
            return `Enter your budget`
        } else if(budgetTotal + assetNumber - expenseNumber < 0) {
            return `You are over budget`
        } else if(budgetTotal + assetNumber - expenseNumber > 0){
            return `You are within budget`
        }    
    }

    const balance = calculateBalance(budgetTotal, assetNumber, expenseNumber)
  
    // render
    res.render('index', 
    { expenseReport: reports, 
        budgets: budgets,
        budgetInitialRender,
        expenseNumber, 
        assetNumber,
        historyTotal,
        balance 
    })
    } catch(err) {
        res.json({ message: err});
    }
});

module.exports = router;

