const express = require("express");

const PlaylistEndpoint = require("./Playlists");

const Router = express.Router();

Router.use("/playlists", PlaylistEndpoint);

module.exports = Router;
