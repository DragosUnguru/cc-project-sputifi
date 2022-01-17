const express = require("express");

const CreatePlaylistCommandHandler = require("../../Commands/Playlists/Handlers/CreatePlaylistCommandHandler.js");
const {
    CreatePlaylistCommand,
} = require("../../Commands/Playlists/Models/CreatePlaylistCommand.js");

const Router = express.Router();

Router.post("/", async (req, res) => {
    const playlistCommand = new CreatePlaylistCommand(req.body);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods");

    try {
        CreatePlaylistCommandHandler.HandleAsync(playlistCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;
