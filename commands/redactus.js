const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName("redactus")
		.setDescription("Edits or redacts a message sent to a channel."),
	async execute(interaction) {
		await interaction.reply(`We are the Mechanicum.`);
		await wait(2000);
		await interaction.editReply(`We are the Adeptus Mechanicus.`);
	},
};
