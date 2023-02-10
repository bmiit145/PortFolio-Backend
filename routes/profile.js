const express = require('express');
const router = express.Router();

const ProfileApi = require("../controllers/profile");


router.get("/" , (req  , res) => {
    res.send("Hello")
})
router.get("/get" , ProfileApi.getProfile);


module.exports = router;