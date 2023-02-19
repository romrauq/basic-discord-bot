const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("option_required")
		.setDescription(`Slash command that takes a required input to fully execute.`)
		.addStringOption((option) =>
			option
				.setName("option_required_1")
				.setDescription(`This is the option description.`)
				.setRequired(true)
		),
	async execute(interaction) {
		const inputText = interaction.options.getString("option_required_1"); // Get inputted text value.
		await interaction.reply(`The required value user entered is:
		 "${inputText}"`);
	},
};

// line 10:  .setRequired(true) ensures the command cannot be exected without a required input.
