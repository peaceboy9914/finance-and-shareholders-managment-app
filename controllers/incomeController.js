import { Share } from "../models/shareModel.js"

export const getAllIncomes = async(req, res) => {
    try {
        const shares = await Share.find();
        if(!shares || []) {
           return res.status(200).send({
                message: "Not share created yet"
            })
        }
        res.status(201).json({
            shares,
        })
    } catch (error) {
        res.status(200).send({
            message: "Error getting share info"
        }),
        console.log(error)
    }
}

export const getIncome = async(req, res) => {
    try {
        const share = await Share.findOne(req.params.id)
        if(!share || []){
            return res.status(200).json({
                message: "Share Detail Not Found",
            })
        }
        res.status(201).json({
            share,
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
        const share = await Share.create(req.body);

        if(!share){
            return res.status(201).json({
                message: 'Error creating share'
            })
        }
    
        return res.status(200).json({
            success: true,
            message: 'Share created successfully',
            share,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error in create share controller ${error}`
        })
    }

}

export const updateIncome = async(req, res) => {
    try {
        const share = await Share.findByIdAndUpdate(req.params.id, req.body)
        if(!share){
            return res.status(201).json({message: 'Error getting share'});
        }
        res.status(200).json({
            success: true,
            message: 'Share info updated successfully',
            share,
        })
    } catch (error) {
        return res.status(201).json({
            message: `Error updating user ${error}`
        })
    }

}

export const deleteIncome = async(req, res) => {
    try {
        const share = await Share.findByIdAndDelete(req.params.id);
        if(!share){
            res.send({message: "error deleting share"})
        }
        return res.status(200).json({
            success: true,
            message: 'Share deleted successfully'
        })
    } catch (error) {
        res.send({message: `Error deleting user: ${error}`})
    }
}