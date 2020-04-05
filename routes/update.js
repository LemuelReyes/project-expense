const express = require('express');
const router = express.Router();
const Expenses = require('../models/Expense');

// UPDATE

router.get('/update/:id', async(req, res) => {
    const idToUpdate = req.params.id;
    const document = await Expenses.findById({ _id: idToUpdate });
    res.render("update",  { document })
});

router.post('/update/:id', async(req, res) => {
    const idToUpdate = req.params.id;

    const updateReport = {
        budget: req.body.budget,
        expense: req.body.expense,
        expenseAmount: req.body.expenseAmount,
        asset: req.body.asset,
        assetAmount: req.body.assetAmount
    }

    let filter = { _id: idToUpdate };

   await Expenses.updateOne(filter, updateReport).exec();

    res.redirect('/');
});

module.exports = router;
