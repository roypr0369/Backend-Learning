import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//Whenever accessing/requesting data from database or api always use async and await

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1);
    }
}

export default connectDB;