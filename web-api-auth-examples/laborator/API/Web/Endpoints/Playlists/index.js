const express = require("express");

const CreatePlaylistEndpoint = require("./CreatePlaylist.js");
const GetPlaylistEndpoint = require("./GetPlaylist.js");

const Router = express.Router();

Router.use("/", CreatePlaylistEndpoint);
Router.use("/", GetPlaylistEndpoint);

module.exports = Router;
