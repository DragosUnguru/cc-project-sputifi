const express = require("express");

const CreatePlaylistCommandHandler = require("../../Commands/Playlists/Handlers/CreatePlaylistCommandHandler.js");
const {
    CreatePlaylistCommand,
} = require("../../Commands/Playlists/Models/CreatePlaylistCommand.js");

const Router = express.Router();

Router.post("/", async (req, res) => {
    const playlistCommand = new CreatePlaylistCommand(req.body);
    try {
        CreatePlaylistCommandHandler.HandleAsync(playlistCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;
