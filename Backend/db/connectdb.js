import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.log("error connecting to MongoDB", err.message);
    }
}
export default connectDB;