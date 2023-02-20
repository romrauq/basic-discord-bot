const { SlashCommandBuilder } = require("discord.js");

// This command's response will only be seen by the one who executed the command:
module.exports = {
	data: new SlashCommandBuilder()
		.setName("descreet")
		.setDescription(`Responds descreetly to user who exeuted.`),
	async execute(interaction) {
		await interaction.reply({
			content: "Only you will receive the response to the command.",
			ephemeral: true, // Sets the reply to be seen only by the command executor.
		});
	},
};
