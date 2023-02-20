const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("option_choices")
		.setDescription(`Slash command provides a list of (required) options to select from`)
		.addStringOption((option) =>
			option
				.setName("option_choices")
				.setDescription(`Returns a list of option to select as command arguments.`)
				.setRequired(true) // Sets the slash command to be only exected after a required option is selcected.
				.addChoices(
					{
						name: "Funny",
						value: "gif_funny",
					},
					{ name: "Meme", value: "gif_meme" },
					{ name: "Movie", value: "gif_movie" }
				)
		),
	async execute(interaction) {
		const choice_value = interaction.options.getString("option_choices"); // Get selected option choice value.
		await interaction.reply(`The value of the user's selected choice is:
		 "${choice_value}"`);
	},
};
