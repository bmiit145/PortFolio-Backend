const mongoose = require ('mongoose');

const projectsSchema = new mongoose.Schema({
    projectName:{
        type: String,
        required : true,
    }
}) 

module.exports = mongoose.model('projects' , projectsSchema);