const express = require('express');
const app = express();
const router = express.Router();
const Expenses = require('../models/Expense');

// MIDDLEWARE
app.set('view engine', 'pug');

// GET BACK ALL POST
router.get('/', async(req,res) => {
    try {
        const documents = await Expenses.find();
        res.render('index', { expenseReport: documents })
    } catch(err) {
        res.json({ message: err});
    }
});

module.exports = router;