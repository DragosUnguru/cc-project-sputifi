const { ExecuteQuery } = require("../../../../Infrastructure/Database");

const { PlaylistView } = require("../Models/PlaylistView.js");

const QueryAsync = async (playlist_name) => {
    const result = await ExecuteQuery(
        "SELECT * FROM playlists WHERE name=" + playlist_name
    );

    return result.map((x) => new PlaylistView(x));
};

module.exports = {
    QueryAsync,
};
