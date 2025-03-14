import Income from '../models/incomeModel.js';

export const getAllIncomes = async(req, res) => {
    try {
        const incomes = await Income.find();
        if(!incomes || []) {
           return res.status(200).send({
                message: "No Income created yet"
            })
        }
        res.status(201).json({
            incomes,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error getting Income info"
        }),
        console.log(error)
    }
}

export const getIncome = async(req, res) => {
    try {
        const income = await Income.findOne(req.params.id)
        if(!income || []){
            return res.status(200).json({
                message: "Share Detail Not Found",
            })
        }
        res.status(201).json({
            income,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error while loading share detail"
        })
        console.log(error)
    }
}

export const createIncome = async(req, res) => {
    try {
        const income = await Income.create(req.body);

        if(!income){
            return res.status(201).json({
                message: 'Error creating income'
            })
        }
    
        return res.status(200).json({
            success: true,
            message: 'Income created successfully',
            income,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error in create Income controller ${error}`
        })
    }

}

export const updateIncome = async(req, res) => {
    try {
        const income = await Income.findByIdAndUpdate(req.params.id, req.body)
        if(!income){
            return res.status(201).json({message: 'Error getting income'});
        }
        res.status(200).json({
            success: true,
            message: 'Income info updated successfully',
            income,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error updating income ${error}`
        })
    }

}

export const deleteIncome = async(req, res) => {
    try {
        const income = await Income.findByIdAndDelete(req.params.id);
        if(!income){
            res.send({message: "error deleting income"})
        }
        return res.status(200).json({
            success: true,
            message: 'Income deleted successfully'
        })
    } catch (error) {
        res.send({message: `Error deleting income: ${error}`})
    }
}