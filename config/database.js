import mongoose from "mongoose";

const connectToDatabase = async () => {
    try {
        // eslint-disable-next-line no-undef
        const connection = await mongoose.connect(process.env.MONGO_URI);
        if(!connection) {
            console.log('Error connecting to the database ');
            return;
        }
        console.log('Connected to the database');
    } catch (error) {
        console.log('Error connecting to the database: ', error);
        
    }
};

export default connectToDatabase;