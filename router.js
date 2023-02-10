const express = require('express');
const app = express();

const ProjectRoute = require("./routes/projects/project")
const ProfileRoute = require ("./routes/profile");


app.use("/project" ,ProjectRoute );
app.use("/profile" , ProfileRoute);


module.exports = app;