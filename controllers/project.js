// const express = require('express');

const { default: mongoose } = require('mongoose');
const ProjectModel = require('../models/project');

module.exports = exports = {

    getProject: async (req , res ) =>{
        // res.send("Hello Projects");
        // new collection
         
        // const newproject = new ProjectModel({
        //     projectName:"priyank", 
        //     time:"hb"
        // })
        // newproject.save();

        // get api


        const Data = await ProjectModel.find();
        console.log(Data);
        res.send(Data);

        // return Data;
        console.log(3456789);

    },
};

