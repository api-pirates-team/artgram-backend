"use strict";
// User accounts collection
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    pp:String,
    isArtist: {
        type:Boolean,
        default:false
    },
    likedArts:{
        type:Array,
        default:[]
    },
    uploadedData:{
        type:Array,
        default:[]
    }
});


const usersModel = mongoose.model('users', usersSchema);

module.exports = {
    usersModel
};