const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// DELETE

router.get('/delete/:id', async(req, res) => {
    try {
        await Expenses.deleteOne({ _id: req.params.id });
        res.redirect('/');
    } catch(err) {
        res.json({ message: err })
    }
});

module.exports = router;
