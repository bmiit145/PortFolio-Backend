// const express = require('express');

const ProjectModel = require('../models/project');

module.exports = exports = {

    getProject: async (req , res ) =>{
        res.send("Hello Projects");
        // new collection
         
        const newproject = new ProjectModel({
            projectName:"priyank" 
        })

        newproject.save();

        console.log(3456789);

    },
};

