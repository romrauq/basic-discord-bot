const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

// This command's response will only be seen by the one who executed the command:
module.exports = {
	data: new SlashCommandBuilder()
		.setName("follow_up")
		.setDescription(`Sends a response & follows up with another response.`),
	async execute(interaction) {
		await interaction.reply("This is the first message.");
		await wait(3000);
		await interaction.followUp("And this is the second message.");
	},
};
