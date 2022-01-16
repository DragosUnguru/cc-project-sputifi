const express = require("express");

const GetPlaylistQueryHandler = require("../../Queries/Playlists/Handlers/GetPlaylistQueryHandler.js");

const Router = express.Router();

Router.get("/:playlist_id", async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Methods");

    try {
        console.log(req.params);
        console.log(req.params.playlist_id);
        var playlist = await GetPlaylistQueryHandler.QueryAsync(req.params.playlist_id);
        res.json(playlist);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;
