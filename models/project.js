const mongoose = require ('mongoose');

const projectsSchema = new mongoose.Schema({
    projectName:{
        type: String,
        required : true,
    },
    time:{
        type:String,
    }

}) 

module.exports = mongoose.model('projects' , projectsSchema);