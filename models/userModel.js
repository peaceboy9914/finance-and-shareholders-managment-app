import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true,
        enum: ['user', 'finance', 'admin'],
        default: 'user',
    },
    email:{
        type: String,
    },
    password: {
        type: String,
    },
    RegNo: {
        type: String,
    },
    FullName: {
        type: String,
    },
    PaymentStatus: {
        type: String,
        enum: ['Paid', 'Pending']
    },
    // Type: {
    //     type: String, //type of the user
    // },
    Membership: {
        type: String, // HUNDESSAA
        enum: ['founder', 'regular']
    },
    Gender: {
        type: String,
        enum: ['male', 'female']
    },
    Phone: {
        type: String,
    },
    Address: {
        type: String,
    },
    Status: {
        type: String,
    },
    Nationality: {
        type: String,
    },
    Ocupation: {
        type: String,
    },
    RegDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true});

export const User = mongoose.model('User', userSchema);

export default User;