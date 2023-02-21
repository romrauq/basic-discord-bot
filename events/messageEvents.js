const { Events } = require("discord.js");

// An event listener for incoming messages received in the bot's channel:
module.exports = {
	name: Events.MessageCreate,
	execute(message) {
		try {
			console.log(message);
		} catch (error) {
			console.error(error);
		}
	},
};
