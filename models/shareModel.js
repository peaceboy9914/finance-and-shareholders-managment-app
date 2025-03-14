import mongoose from 'mongoose';

const shareSchema = new mongoose.Schema({
    Amount: {
        type: Number,
    },
    Status: {
        type: String,
        enum: ['Paid', 'Pending'],
    },
    PaidAmount: {
        type: Number,
    },
    Remaining: {
        type: Number
    }
});
export const Share = mongoose.model('Share', shareSchema);