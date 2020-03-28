const mongoose = require('mongoose');

const ExpenseSchema = mongoose.Schema({
    budget: {
        type: String,
    },
    expense: {
        type: String
    },
    expenseAmount: {
        type: Number
    },
    asset: {
        type: String
    },
    assetAmount: {
        type: Number
    }
})

module.exports = mongoose.model('Expenses', ExpenseSchema)