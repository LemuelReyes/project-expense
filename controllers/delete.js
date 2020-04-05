const Expenses = require('../models/Expense');

// DELETE

exports.delete = async(req,res) => {
        try {
        const expense = await Expenses.findById(req.params.id);
        await expense.remove();
        res.redirect('/');
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
}
