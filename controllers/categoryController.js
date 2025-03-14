import {IncomeCategory, ExpenseCategory} from '../models/categoryModel.js';

export const getAllIncomeCategories = async(req, res) => {
    try {
        const categories = await IncomeCategory.find();
        if(!categories) {
           return res.status(200).json({
                message: "No Income categories created yet"
            })
        }
        res.status(200).json({
            categories,
        })
    } catch (error) {
        console.log(error)
    }
}

export const getIncomeCategory = async(req, res) => {
    try {
        const category = await IncomeCategory.findById(req.params.id)
        if(!category){
            return res.status(200).json({
                message: "Category Detail Not Found",
            })
        }
        res.status(201).json({
            category,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error while loading category detail"
        })
        console.log(error)
    }
}

export const createIncomeCategory = async(req, res) => {
    try {
        const category = await IncomeCategory.create(req.body);

        if(!category){
            return res.status(201).json({
                message: 'Error creating category'
            })
        }
    
        return res.status(200).json({
            success: true,
            message: 'Category created successfully',
            category,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error in create category controller ${error}`
        })
    }

}

export const updateIncomeCategory = async(req, res) => {
    try {
        const category = await IncomeCategory.findByIdAndUpdate(req.params.id, req.body)
        if(!category){
            return res.status(201).json({message: 'Error getting category'});
        }
        res.status(200).json({
            success: true,
            message: 'category info updated successfully',
            category,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error updating category ${error}`
        })
    }

}

export const deleteIncomeCategory = async(req, res) => {
    try {
        const category = await IncomeCategory.findByIdAndDelete(req.params.id);
        if(!category){
            res.send({message: "error deleting income"})
        }
        return res.status(200).json({
            success: true,
            message: 'Category deleted successfully'
        })
    } catch (error) {
        res.send({message: `Error deleting category: ${error}`})
    }
}


export const getAllExpenseCategories = async(req, res) => {
    try {
        const categories = await ExpenseCategory.find();
        if(!categories) {
           return res.status(200).send({
                message: "No categories created yet"
            })
        }
        res.status(201).json({
            categories,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error getting categories info"
        }),
        console.log(error)
    }
}

export const getExpenseCategory = async(req, res) => {
    try {
        const category = await ExpenseCategory.findById(req.params.id)
        if(!category){
            return res.status(200).json({
                message: "Category Detail Not Found",
            })
        }
        res.status(201).json({
            category,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error while loading category detail"
        })
        console.log(error)
    }
}

export const createExpenseCategory = async(req, res) => {
    try {
        const category = await ExpenseCategory.create(req.body);

        if(!category){
            return res.status(201).json({
                message: 'Error creating category'
            })
        }
    
        return res.status(200).json({
            success: true,
            message: 'Category created successfully',
            category,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error in create category controller ${error}`
        })
    }

}

export const updateExpenseCategory = async(req, res) => {
    try {
        const category = await ExpenseCategory.findByIdAndUpdate(req.params.id, req.body)
        if(!category){
            return res.status(201).json({message: 'Error getting category'});
        }
        res.status(200).json({
            success: true,
            message: 'category info updated successfully',
            category,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error updating category ${error}`
        })
    }

}

export const deleteExpenseCategory = async(req, res) => {
    try {
        const category = await ExpenseCategory.findByIdAndDelete(req.params.id);
        if(!category){
            res.send({message: "error deleting income"})
        }
        return res.status(200).json({
            success: true,
            message: 'Category deleted successfully'
        })
    } catch (error) {
        res.send({message: `Error deleting category: ${error}`})
    }
}