import mongoose from "mongoose"

// Schema
const userSchema = new mongoose.Schema({

    first_name : {
        type : String,
        required : true
    },

    last_name : {
        type : String,
        required : false
    },

    email : {
        type : String,
        required : true,
        unique : [true, "The email should be unique."]
    },

    gender : {
        type : String,
        required : true
    },

    job_title : {
        type : String
    }

}, {timestamps : true})


const User = mongoose.model('user', userSchema)

export default User