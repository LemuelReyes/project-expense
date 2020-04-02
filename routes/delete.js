const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// DELETE

router.post('/delete/:id', async(req, res) => {
    try {
        await Expenses.findByIdAndDelete({ _id: req.params.id });
        res.redirect('/');
    } catch(err) {
        console.log(err)
        res.render('/', { message: 'This is an error' })
    }
});

module.exports = router;
