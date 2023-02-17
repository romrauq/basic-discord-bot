const { SlashCommandBuilder } = require("discord.js");

// This command's response will only be seen by the one who executed the command:
module.exports = {
	data: new SlashCommandBuilder()
		.setName("spiritus")
		.setDescription(`Responds descreetly to user who exeuted the holy command.`),
	async execute(interaction) {
		await interaction.reply({
			content: "Absent his presence may feel but the Omnissiah watches over us all",
			ephemeral: true, // Sets the reply to be seen only by the command executor.
		});
	},
};
