const { Events } = require("discord.js");

// An event listener that is fired when the bot successfully logs in:
module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! ${client.user.tag} has logged in successfully.`);
	},
};
