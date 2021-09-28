'use strict';

const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;

const { createUser, getUser, updateLikes, unlike } = require('./Controllers/users.Controller');
const { getAllarts, incrementLikes } = require('./Controllers/items.Controlllers');
const { getWorks, addWorks, deleteWork, updateWork, addComment } = require('./Controllers/artists.Controller');

mongoose.connect(`${process.env.MONGO_ATLAS}`, { useNewUrlParser: true, useUnifiedTopology: true });

server.get("/", (req, res) => { res.status(200).json({ message: "I'm working" }); });


/* To build our gallery collection using the 3 APIs:
server.get('/art', makeColliction); */

// Main requests:
server.get("/art/allart", getAllarts); // To get the gallery API
server.post("/create_account", createUser) // Login/signup
server.get("/getuser", getUser); // Get user account data
server.put('/update-likes/:id', updateLikes); // Like an image and add it to the user's feed
server.delete('/unlike/:id', unlike) // Unlike an image and remove it from the user's feed
server.put("/liked-item/:id", incrementLikes)

// Artists account requests:
server.get("/get-work", getWorks);
server.post("/add-work", addWorks)
server.delete("/delete-work/:id", deleteWork);
server.put("/update-work/:id", updateWork);
server.post("/add-comment/:id", addComment);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
