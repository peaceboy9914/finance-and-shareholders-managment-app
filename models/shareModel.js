import mongoose from 'mongoose';
import { User } from './userModel.js';

const shareSchema = new mongoose.Schema({
    PaidAmount: {
        type: Number,
    },
    Remaining: {
        type: Number
    },
    SharePrice: {
        type: Number
    },
    ShareQuantity: {
        type: Number
    },
    ShareDescription: {
        type: String
    },
    ShareType: {
        type: String,
        enum: ['Paid', 'Pending']
    },
    ShareStatus: {
        type: String,
        enum: ['Active', 'Inactive']
    },
    ShareDate: {
        type: Date
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
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
export const Share = mongoose.model('Share', shareSchema);