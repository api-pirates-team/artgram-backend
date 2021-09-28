'use strict';
// Methods for creating the 'all-museums' API

const axios = require('axios');
const { allMuseumsModel,
    // artModel,
    // harvardModel,
    rijksModel
} = require('../Models/Item.model');

const getAllarts=(req,res)=>{
    allMuseumsModel.find({}).then(item=>{
        res.status(200).json(item)
    })
}

// we already created three requst from three APIs 
// we used this function to create a collection of data from three APIs 
const makeColliction = () => {
    rijksModel.find({}).then(all => {
        all.map(elem => {
            let oneItem = new allMuseumsModel({
                iditem: elem.iditem,
                title: elem.title,
                artistName: elem.artistName,
                displaydate: elem.displaydate,
                dimensions: elem.dimensions,
                imageUrl: elem.imageUrl,
                likesCounter: elem.likesCounter
            })
            oneItem.save()
        })
    });
}

const incrementLikes = async (req, res) => {
    let id = req.params.id;
    let likesCount = req.body;
    allMuseumsModel.findOne({ _id:id }).then(data => {
        data.likesCounter = data.likesCounter + 1;
        data.save();
    });
    let updatedItem = await allMuseumsModel.findOne({ _id: id });
    res.status(200).send(updatedItem.likesCounter);
}

module.exports = {makeColliction, getAllarts, incrementLikes};