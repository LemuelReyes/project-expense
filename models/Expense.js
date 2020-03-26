const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    budget: {
        type: Number,
        required: true
    },
    expense: {
        type: String,
        required: true
    },
    expenseAmount: {
        type: Number,
        required: true
    },
    asset: {
        type: String,
        required: true
    },
    assetAmount: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Expenses', ExpenseSchema);