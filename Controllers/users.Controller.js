'use strict';
// Methods for user's accounts

const { usersModel } = require('../Models/Users.model');

// Log-in/Sign-up request
const createUser = async (req, res) => {
    let checkEmail = await usersModel.exists({ email: req.body.email })
    if (checkEmail) {
        res.status(200).send("account is existed ");
        // checkEmail = false;
    } else {
        let user = new usersModel({
            username: req.body.username,
            email: req.body.email,
            pp: req.body.img
        })
        user.save();
        res.status(200).send("account was created ");
    }
}

let getUser = async (req, res) => {
    let emailnew = req.query.email;
    if (emailnew) {
        let existedEmail = await usersModel.findOne({ email: emailnew }).then(data => {
            res.json(data);
        })
    }
}

// Like images (put request)
let updateLikes = async (req, res) => {
    let id = req.params.id;
    let likedItem = req.body;
    usersModel.findOne({ _id: id }).then(data => {
        data.likedArts.push(likedItem);
        data.save();
    });
    let updatedUser = await usersModel.findOne({ _id: id });
    res.status(200).json(updatedUser);
}

// Unlike image (delete request)

let unlike = async (req, res) => {
    let userID = req.params.id;
    let imageID = req.query.imageID;
    usersModel.findOne({ _id: userID }).then(data => {
        let likesArray = data.likedArts;
        for (let i = 0; i < likesArray.length; i++) {
            if (likesArray[i]._id === imageID) {
                likesArray.splice(i, 1);
            }
        }
        data.likedArts = likesArray;
        data.save();
    });
    let updatedUser = await usersModel.findOne({ _id: userID });
    res.status(200).json(updatedUser);
}

module.exports = { createUser, getUser, updateLikes, unlike };
