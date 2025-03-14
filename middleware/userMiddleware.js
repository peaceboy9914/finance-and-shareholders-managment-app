import { body, validationResult } from "express-validator"

export const createUserValidation = [
    body('name')
        .trim()
        .isString().withMessage("Name must be string")
        .notEmpty().withMessage("Full name is required"),
    body('email')
        .normalizeEmail()
        .isEmail().withMessage("Valid email is required"),
    body('password')
        .notEmpty().withMessage("Password field is required"),
    body('paystatus')
        .isString()
        .notEmpty().withMessage("Payment status is required"),
    body('membership')
        .isString()
        .notEmpty().withMessage("Membership status is required"),
    body('gender')
        .isString()
        .notEmpty().withMessage("Geneder field is required"),
    body('phone')
        .isMobilePhone().withMessage("valid mobile phone is required"),
    body('address')
        .notEmpty().withMessage("Address field is required"),
    body('status')
        .notEmpty().withMessage("Please fill if the user is active"),
    body('nationality')
        .notEmpty().withMessage("Nationality is required"),
    body('occupation')
        .notEmpty.withMessage('Occupation is required'),
    body('regdate')
        .notEmpty.withMessage('Registration date is required'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
]

export const updateUserValidation = [
    body('name')
        .trim()
        .isString().withMessage("Name must be string"),
    body('email')
        .normalizeEmail()
        .isEmail().withMessage("Valid email is required"),
    body('phone')
        .isMobilePhone().withMessage("valid mobile phone is required"),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty) {
            return res.status(400).json({errors: errors.array()});
        }
        next();
    }
]