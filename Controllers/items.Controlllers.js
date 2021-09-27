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
                imageUrl: elem.imageUrl
            })
            oneItem.save()
        })
    });
}

module.exports = {makeColliction,getAllarts};