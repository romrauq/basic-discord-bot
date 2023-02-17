const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("deferum")
		.setDescription("Give the adept time to ponder the glory of the Omnissiah."),
	async execute(interaction) {
		await interaction.deferReply();
		await wait(5000);
		await interaction.editReply("Thank you for your patience for the Omnissiah.");
	},
};
