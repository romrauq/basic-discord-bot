const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("hello")
		.setDescription('Responds with "Hello ${username}".'),
	async execute(interaction) {
		const username = interaction.user.username; // Gets user's username.
		await interaction.reply(`Hello ${username}!`);
	},
};
