const mongoose = require('mongoose');
const ProfileSchema = require('../models/Profile')

module.exports = exports =  {
    getProfile:  async (req , res) => {
        const newProfile = new ProfileSchema({
            id:1,
            name:"Priyank Sutariya",
            DOB:"13-08-2022"
        })

        newProfile.save();

        res.send(await ProfileSchema.find());
    },

}