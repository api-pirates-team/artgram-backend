'use strict';

const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;

const {createUser, getUser, updateLikes}= require('./Controllers/users.Controller');
const {getAllarts} = require('./Controllers/items.Controlllers');
const {getWorks, addWorks, deleteWork, updateWork} = require('./Controllers/artists.Controller');

mongoose.connect(`${process.env.MONGO_ATLAS}`, { useNewUrlParser: true, useUnifiedTopology: true });

server.get("/", (req, res) => { res.status(200).json({ message: "I'm working" }); });


// server.get('/art', makeColliction);
server.get("/art/allart",getAllarts);
server.post("/create_account",createUser)
server.get("/getuser",getUser);
server.put('/update-likes/:id', updateLikes);

server.get("/get-work", getWorks);
server.post("/add-work", addWorks)
server.delete("/delete-work/:id", deleteWork);
server.put("/update-work/:id", updateWork);

server.listen(PORT, () => console.log(`listening on ${PORT}`));
