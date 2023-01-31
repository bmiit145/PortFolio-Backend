const express = require('express');
const router = express.Router();
const ProjectApi = require("../../controllers/project");

router.get("/get" , ProjectApi.getProject);



module.exports = router;