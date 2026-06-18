import mongoose from 'mongoose';

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Mongoose connected Successfully. ');

    }catch(error){
        console.error('Mongoose Connection failed.', error);
        process.exit(1);
    }
};

export default connectDB;