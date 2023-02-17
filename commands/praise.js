const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("praise")
		.setDescription("Gives praise to the almighty Omnissiah."),
	async execute(interaction) {
		await interaction.reply(
			`${interaction.user.username} gives praise to the almighty Omnissiah!`
		);
	},
};
