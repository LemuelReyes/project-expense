const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// DELETE

router.post('/delete/:id', async(req, res) => {
    try {
        const expense = await Expenses.findById(req.params.id);
        
        if(!expense) {
            res.status(404).json({
                success: false,
                error: 'No expense found'
            });
        }
        await expense.remove();

        res.status(200).json({
            success: true,
            data: {}
        });
        res.redirect('./');
    } catch(err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
});

module.exports = router;
