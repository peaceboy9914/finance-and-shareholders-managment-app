/* eslint-disable no-undef */
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if(user){
            return res.status(400).json({
                message: 'User already exists',
            });
        }
        const { firstName, email, password, role } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPasword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
            firstName,
            email,
            hashedPasword,
            role,
        });
        if(!newUser){
            return res.status(400).json({
                message: 'User not created',
            });
        }
        res.status(201).json({
            newUser,
        });
        console.log('User created successfully');
    } catch (error) {
        res.status(400).json({
            message: 'Error creating user',
        });
        console.error('Error creating user', error);
    }
};

export const loginUser = async(req, res) => {
    try {
        const { email, password} = req.body;
        const user = await User.findOne({email: email});

        if(!user){
            const error = new Error('User not found');
            error.statusCode = 404;
            throw error;
        }

        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword) {
            const error = new Error('Invalid password');
            error.statusCode = 404;
            throw error;
        }

        const token = jwt.sign({userId: user._id}, 'secret', {expiresIn: '1d'})

        res.status(200).json({
            success: true,
            message: "User signed in successfully",
            data: {
                token,
                user,
            }
        })
    } catch (error) {
        res.status(400).json({
            message: 'Error logging in user',
        });
        console.log('Error logging in user', error);
    }
}