const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("edit_message")
		.setDescription("Edits a message sent to a channel after a specified (wait) period."),
	async execute(interaction) {
		await interaction.reply(`This message response will be edited in 5 seconds.`);
		await wait(5000);
		await interaction.editReply(`The message has been successfully edited.`);
	},
};
