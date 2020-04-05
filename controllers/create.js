const Expenses = require('../models/Expense');

// CREATE

exports.create = async(req, res) => {
    try {
        const reportBudget = {
            budget: req.body.budget,
            expense: req.body.expense,
            expenseAmount: req.body.expenseAmount,
            asset: req.body.asset,
            assetAmount: req.body.assetAmount
        };
        const saveReport = await new Expenses(reportBudget);
        await saveReport.save();
        res.redirect('/');
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
