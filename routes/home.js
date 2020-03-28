const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// MIDDLEWARE
app.set('view engine', 'pug');

// READ
// Problem why my data renders three times
router.get('/', async(req,res) => {
    try {
        const documents = await Expenses.find();

        const budgets = documents.filter(expense => expense.budget);
        const reports = documents.filter(expense => !expense.budget);

        res.render('index', { expenseReport: reports, budgets})
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
        const deleteId = await Expenses.findById(req.params.postId);
        await Expenses.deleteOne({ _id: deleteId });
        res.redirect('/');
    } catch(err) {
        res.json({ message: err })
    }
});

// router.post('/reportExpenses', (req,res) => {
//     const reportExpenses = {
//         expense: req.body.expense,
//         expenseAmount: req.body.expenseAmount,
//     };
//     const saveExpenses = new Expenses(reportExpenses);
//     saveExpenses.save();
//     try {
//         const saveReport = await report.save();
//         res.json(saveReport);
//     } catch(err) {
//         res.json({ message: err })
//     }

//     res.render('index', {variables: report});

// });

module.exports = router;


// 
// router.delete('/delete/:id', async (req, res) => {
//     try {
//         await Expenses.deleteOne({ _id: req.params.postId });
//         res.redirect('/');
//     } catch(err) {
//         res.json({ message: err })
//     }
// });