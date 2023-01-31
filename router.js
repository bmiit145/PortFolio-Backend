const express = require('express');
const app = express();

const ProjectRoute = require("./routes/projects/project")


app.use("/project" ,ProjectRoute );



module.exports = app;