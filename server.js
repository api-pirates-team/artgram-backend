'use strict';

const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
server.use(cors());
server.use(express.json());
const PORT = process.env.PORT;
// import getAllarts from 
const {getAllarts} = require('./Controllers/items.Controlllers');

mongoose.connect(`${process.env.MONGO_ATLAS}`, { useNewUrlParser: true, useUnifiedTopology: true });

server.get("/", (req, res) => { res.status(200).json({ message: "I'm working" }); });


// server.get('/art', makeColliction);
server.get("/art/allart",getAllarts);


server.listen(PORT, () => console.log(`listening on ${PORT}`));
