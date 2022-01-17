class CreatePlaylistCommand {
    constructor(playlist) {
        this.id = playlist.id;
        this.name = playlist.name;
        this.userid = playlist.userid;
        this.link = playlist.link;
        this.info = playlist.info;
    }
}

module.exports = {
    CreatePlaylistCommand,
};
