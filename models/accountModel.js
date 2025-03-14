import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    name: {
        type: String
    },
    accountNumber: {
        type: String
    },
    bankName: {
        type: String
    },
    branch: {
        type: String
    },
    description: {
        type: String
    },
    balance: {
        type: Number
    },
    type: {
        type: String,
        enum: ['credit', 'debit']
    },
    status: {
        type: String,
        enum: ['active', 'inactive']
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

const Account = mongoose.model('Account', accountSchema);

export default Account