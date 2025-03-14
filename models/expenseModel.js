import mongoose from "mongoose";
import { ExpenseCategory } from "./categoryModel";

const expenseSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: ExpenseCategory
    },
    isReccuring: {
        type: Boolean,
    },
    date: {
        type: Date
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

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense