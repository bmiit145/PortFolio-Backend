const mongoose = require('mongoose');

const ProfileSchema = new  mongoose.Schema({
    id:Number,
    name:{
        type:String,
        required: true,
    },
    DOB:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model("profile" , ProfileSchema);