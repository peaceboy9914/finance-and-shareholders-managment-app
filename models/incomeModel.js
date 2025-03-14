import mongoose from "mongoose";
import { IncomeCategory } from "./categoryModel";

const incomeSchema = new mongoose.Schema({
    amount: {
        type: Number
    },
    description: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: IncomeCategory
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

const Income = mongoose.model('Income', incomeSchema);

export default Income