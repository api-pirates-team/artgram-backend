"use strict";


const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    pp:String,
    isArtist: {
        type:Boolean,
        default:false
    }
    
});


const usersModel = mongoose.model('users', usersSchema);

module.exports = {
    usersModel
};