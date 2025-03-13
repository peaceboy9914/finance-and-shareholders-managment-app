import { body, validationResult } from "express-validator";

export const shareMiddleware = [
    body('amount')
        .isNumeric().withMessage('Amount must be Number')
        .notEmpty().withMessage('Amount field is required'),
    body('status').notEmpty().withMessage('Status is required'),
    body('paidAmount')
        .isNumeric().withMessage('Paid amount must be Number')
        .notEmpty().withMessage('Paid amount is required'),
    body('remaining')
        .isNumeric().withMessage('Remainint amount must be Number')
        .notEmpty().withMessage('Remaining amount is required'),

    (req, res, next) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(201).json({errors: errors.array()})
        }

        next();
    }
]