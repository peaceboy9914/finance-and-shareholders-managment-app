import Expense from '../models/expenseModel.js';

export const getAllExpenses = async(req, res) => {
    try {
        const expenses = await Expense.find();
        if(!expenses) {
           return res.status(400).send({
                message: "No Expense created yet"
            })
        }
        res.status(200).json({
            expenses,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error getting Expense info"
        }),
        console.log(error)
    }
}

export const getExpense = async(req, res) => {
    try {
        const expense = await Expense.findById(req.params.id)
        if(!expense){
            return res.status(200).json({
                message: "Expenese Detail Not Found",
            })
        }
        res.status(201).json({
            expense,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error while loading expense detail"
        })
        console.log(error)
    }
}

export const createExpense = async(req, res) => {
    try {
        const expense = await Expense.create(req.body);

        if(!expense){
            return res.status(201).json({
                message: 'Error creating expense'
            })
        }
    
        return res.status(200).json({
            success: true,
            message: 'Expense created successfully',
            expense,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error in create Expense controller ${error}`
        })
    }

}

export const updateExpense = async(req, res) => {
    try {
        const expense = await Expense.findByIdAndUpdate(req.params.id, req.body)
        if(!expense){
            return res.status(201).json({message: 'Error getting expense'});
        }
        res.status(200).json({
            success: true,
            message: 'Expense info updated successfully',
            expense,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error updating expense ${error}`
        })
    }

}

export const deleteExpense = async(req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);
        if(!expense){
            res.send({message: "error deleting expense"})
        }
        return res.status(200).json({
            success: true,
            message: 'Expense deleted successfully'
        })
    } catch (error) {
        res.send({message: `Error deleting expense: ${error}`})
    }
}