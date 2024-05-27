const mongoose=require("mongoose")
const userSchema=new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            index: true
        },
        lastName: {
            type: String,
            required: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        gender: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            required: true
        }
    }
)
const User=mongoose.model("User",userSchema)
module.exports = User