const { SlashCommandBuilder } = require("discord.js");

// This command's response will only be seen by the one who executed the command:
module.exports = {
	data: new SlashCommandBuilder()
		.setName("follow")
		.setDescription(`Sends a response and follows up with another response.`),
	async execute(interaction) {
		await interaction.reply("We are the wrath of the machine...");
		await interaction.followUp("...even in death, we serve the Omnissiah");
	},
};
