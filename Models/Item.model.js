'use strict';


const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    iditem: String,
    title: String,
    artistName: String,
    displaydate: String,
    dimensions: String,
    imageUrl: String
});

const artModel = mongoose.model('artworks', itemSchema);

module.exports = { artModel };