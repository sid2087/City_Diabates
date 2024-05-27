const mongoose=require("mongoose")
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MANGO_DB_URI}`);
        console.log("Database Connected");
    } catch (error) {
        console.log("Error: ", error);
        process.exit(1);
    }
}

module.exports = connectDB