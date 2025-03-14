import mongoose from "mongoose";

const incomecategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['expense', 'income']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

}, {timestamps: true});

const expensecategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ['expense', 'income']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
    
}, {timestamps: true});

export const ExpenseCategory = mongoose.model('ExpenseCategory', expensecategorySchema);
export const IncomeCategory = mongoose.model('IncomeCategory', incomecategorySchema);

