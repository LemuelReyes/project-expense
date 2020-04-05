const express = require('express')
const router = express.Router();

// IMPORT ROUTES
const home = require('./controllers/home');
const createExpense = require('./controllers/create');
const updateExpense = require('./controllers/update');
const deleteExpense = require('./controllers/delete');

// ROUTES

router.get('/', home.home);
router.post('/reportBudget', createExpense.create);
router.get('/update/:id', updateExpense.getUpdate);
router.post('/update/:id', updateExpense.postUpdate);
router.post('/delete/:id', deleteExpense.delete);

module.exports = router