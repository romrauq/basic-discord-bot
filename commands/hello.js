const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("hello")
		.setDescription(`Replies to "/hello" slash command.`),
	async execute(interaction) {
		await interaction.reply("Hello, faithful servant of the Ommnissiah.");
	},
};
