'use strict';
// CRUD for the artist account

const { artistsModel } = require('../Models/Artists.model');

// GET method (to get the arts works of each artist)
const getWorks = (req, res) => {
    artistsModel.find({}).then(data => {
        res.status(200).json(data);
    })
}

// POST method (to create/add art works to the homepage)
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

// DELETE method (to delete an art work from the artist's collection)
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

// PUT method (to edit the details of a specific art work)
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

let addComment = async (req, res) => {
    let itemId = req.params.id;
    let comment = req.body;
    artistsModel.findOne({ _id: itemId }).then(data => {
        data.comments.push(comment);
        data.save();
    });
    let updateComments = await artistsModel.findOne({ _id: id });
    res.status(200).json(updateComments);
}

module.exports = { getWorks, addWorks, deleteWork, updateWork, addComment };

