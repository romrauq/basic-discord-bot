const { Events } = require("discord.js");

// An event listener message events to execute code when a message is received in the channel:
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
