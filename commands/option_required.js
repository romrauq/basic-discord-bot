const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("option_required")
		.setDescription(`Slash command that takes a required input to fully execute.`)
		.addStringOption(
			(option) =>
				option
					.setName("option_1")
					.setDescription(`This is the option description.`)
					.setRequired(true) // Sets the slash command to be only exected after an inout value is provided by the user.
		),
	async execute(interaction) {
		const inputText = interaction.options.getString("option_1"); // Get input text value.
		await interaction.reply(`The required value user entered is:
		 "${inputText}"`);
	},
};
