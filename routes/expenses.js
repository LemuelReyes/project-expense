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
        res.render('index', { expenseReport: documents })
    } catch(err) {
        res.json({ message: err});
    }
});

// CREATE
router.post('/reportBudget', (req,res) => {
    const reportBudget = {
        budget: req.body.budget,
        expense: req.body.expense,
        expenseAmount: req.body.expenseAmount,
        asset: req.body.asset,
        assetAmount: req.body.assetAmount
    };
    const saveReport = new Expenses(reportBudget);
    saveReport.save();
    res.redirect('/');
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

// // DELETE

// router.delete('/delete/:id', async (req, res) => {
//     try {
//         await Expenses.deleteOne({ _id: req.params.postId });
//         res.redirect('/');
//     } catch(err) {
//         res.json({ message: err })
//     }
// });

module.exports = router;