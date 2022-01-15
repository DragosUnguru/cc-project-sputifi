const MessageQueue = require("../../../../Infrastructure/RabbitMQ");

const QUEUE = "playlists";

/**
 *
 * @param {CreatePlaylistCommand} playlistCommand
 */
const HandleAsync = async (playlistCommand) => {
    await MessageQueue.PublishMessageAsync(QUEUE, playlistCommand);
};

module.exports = {
    HandleAsync,
};
