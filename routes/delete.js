const express = require('express');
const router = express.Router();
const Expenses = require('../models/Expense');

// DELETE

router.post('/delete/:id', async(req, res) => {
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
});

module.exports = router;
