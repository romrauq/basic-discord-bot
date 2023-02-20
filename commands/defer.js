const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("defer")
		.setDescription("Sends a responds after a specified (wait) period."),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(5000);
		await interaction.editReply("Thank you for your patience.");
	},
};
