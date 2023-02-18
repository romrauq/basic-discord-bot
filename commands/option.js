const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("option")
		.setDescription(`A slash command with a text input option.`)
		.addStringOption((option) =>
			option.setName("option_1").setDescription(`This is my option description.`)
		),
	async execute(interaction) {
		const inputText = interaction.options.getString("option_1"); // Get inputted text value.
		await interaction.reply(`The value entered into the option is:
		 "${inputText}"`);
	},
};

// Line 7: ".addStringOption()" Creates a new input option.
// line 8-9: arg.setName("name") Names the created option.
// line 10:  .setDescription("description") Sets the description of the created option.
