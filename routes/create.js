const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

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

module.exports = router;
