const express = require("express");

const GetPlaylistQueryHandler = require("../../Queries/Playlists/Handlers/GetPlaylistQueryHandler.js");

const Router = express.Router();

Router.get("/", async (req, res) => {
    try {
        var playlist = await GetPlaylistQueryHandler.QueryAsync(req.body.name);
        res.json(playlist);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;
