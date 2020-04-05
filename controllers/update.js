const Expenses = require('../models/Expense');

exports.getUpdate = async(req, res) => {
    try {
        const idToUpdate = req.params.id;
        const document = await Expenses.findById({ _id: idToUpdate });
        res.render("update",  { document })    
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}

exports.postUpdate = async(req, res) => {
    try {
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
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}