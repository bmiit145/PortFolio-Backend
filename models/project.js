const mongooes = require ('mongooes');

const projectsSchema = new mongooes.Schema({
    projectName:{
        type: String,
        required : true,
    }
}) 

module.exports = mongooes.model('projects' , projectsSchema);