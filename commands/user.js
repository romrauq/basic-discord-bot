const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("user")
		.setDescription("Provides information about the user."),
	async execute(interaction) {
		const username = interaction.user.username; // interaction.user is the object representing the User who ran the command.
		const join_date = interaction.member.joinedAt; // interaction.member is the GuildMember object, which represents the user in the specific guild
		await interaction.reply(`This command was run by ${username}, who joined on ${join_date}.`);
	},
};
