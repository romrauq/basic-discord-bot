const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("option_choices")
		.setDescription(`Slash command provides a list of (required) options to select from`)
		.addStringOption((option) =>
			option
				.setName("option_choices")
				.setDescription(`This is the option description.`)
				.setRequired(true)
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
		const choice_value = interaction.options.getString("option_choices"); // Get selected choice value.
		await interaction.reply(`The value of the user's selected choice is:
		 "${choice_value}"`);
	},
};
