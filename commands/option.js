const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("option")
		.setDescription(`A slash command with a text input option.`)
		.addStringOption((option) =>
			option.setName("option_1").setDescription(`This is my option description.`)
		), // Creates, names & provides description for a new option item.
	async execute(interaction) {
		const inputText = interaction.options.getString("option_1"); // Gets the user inputted text value.
		await interaction.reply(`The value entered into the option is:
		 "${inputText}"`);
	},
};
