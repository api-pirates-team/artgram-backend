"use strict";
const mongoose = require('mongoose');

const artistsSchema = new mongoose.Schema({
    artistName: String,
    artistpp:String,
    artistContactInfo: String,
    artistLocation: String,
    workTitle: String,
    workDate: String,
    workDimensions: String,
    workImage: String
});

const artistsModel = mongoose.model('artists', artistsSchema);

module.exports = {
    artistsModel
};