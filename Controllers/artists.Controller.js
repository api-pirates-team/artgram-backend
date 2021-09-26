'use strict';

const { artistsModel } = require('../Models/Artists.model');

// GET request
const getWorks = (req, res) => {
    artistsModel.find({}).then(data => {
        res.status(200).json(data);
    })
}

// POST request
const addWorks = (req, res) => {
    let work = req.body;
    let newWork = new artistsModel({
        artistName: work.artistName,
        artistpp: work.artistpp,
        artistContactInfo: work.artistContactInfo,
        artistLocation: work.artistLocation,
        workTitle: work.workTitle,
        workDate: work.workDate,
        workDimensions: work.workDimensions,
        workImage: work.workImage
    });
    newWork.save();
    res.status(200).json(newWork);
}

// DELETE request
const deleteWork = (req, res) => {
    let id = req.params.id;
    artistsModel.findByIdAndDelete(id, async (error) => {
        if (error) {
            res.status(500).send("an error occurred while deleting the artwork");
        }
        let worksList = await artistsModel.find({});
        res.status(200).json(worksList);
    });
}

// PUT request
const updateWork = async (req, res) => {
    let id = req.params.id;
    let updatedData = req.body;
    artistsModel.findOne({ _id: id }).then(work => {
        work.artistName = updatedData.artistName;
        work.artistpp = updatedData.artistpp;
        work.artistContactInfo = updatedData.artistContactInfo;
        work.artistLocation = updatedData.artistLocation;
        work.workTitle = updatedData.workTitle;
        work.workDate = updatedData.workDate;
        work.workDimensions = updatedData.workDimensions;
        work.workImage = updatedData.workImage
        work.save();
    });
    let updatedList = await artistsModel.find({});
    res.status(200).json(updatedList); 
}

module.exports = {getWorks, addWorks, deleteWork, updateWork};

