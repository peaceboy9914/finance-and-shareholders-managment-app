import User from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find();
        if(!user){
            return res.status(400).json({
                message: 'No user found',
            });
        }
        res.status(200).json({
            user,
        });
    } catch (error) {
        console.log(error)
    }

}

export const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        if(!user){
            return res.status(400).json({
                message: 'User not created',
            });
        }
        res.status(201).json({
            success: true,
            user,
            message: "User created successfully",
            });
            console.log('User created successfully');        
    } catch (error) {
        res.status(400).json({
            message: 'Error creating user',
        });
        console.error('Error creating user', error);       
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(400).json({
                message: 'User not found',
            });
        }
        res.status(200).json({
            user,
        });
    } catch (error) {
        console.error('Error getting user',error);
        return res.status(400).json({
            message: 'Error getting user',
        });
    }

}

export const updateUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        if(!user){
            return res.status(404).json({message: 'User not found'})
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            user,
        })

    } catch(error){
        console.log(error)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                message: 'User not found',
            });
        }
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        console.error('Error deleted user', error);
        res.status(500).json({
            message: 'Error deleting user',
        })
    }

}



