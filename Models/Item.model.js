'use strict';
// 'all museums' collection

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    iditem: String,
    title: String,
    artistName: String,
    displaydate: String,
    dimensions: String,
    imageUrl: String,
    likesCounter: {
        type: Number,
        default: 0
    }
});

// For the collection of the elements coming from the different APIs and our collection:
const artModel = mongoose.model('artworks', itemSchema);
const harvardModel = mongoose.model('harvard', itemSchema);
const rijksModel = mongoose.model('rijks', itemSchema);
const allMuseumsModel = mongoose.model('allMuseums', itemSchema);

module.exports = {
    artModel,
    harvardModel,
    rijksModel,
    allMuseumsModel
};