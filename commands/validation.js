const { SlashCommandBuilder, ChannelType } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("echo")
		.setDescription(`Replies with your input.`)
		.addStringOption((option) =>
			option
				.setName("input")
				.setDescription(`The input to echo back.`)
				// Ensure the text will fit in an embed description, if the user chooses that option
				.setMaxLength(2000)
		)
		.addChannelOption((option) =>
			option
				.setName("channel")
				.setDescription(`The channel to echo into.`)
				// Ensure that the user can only select a TextChannel for output:
				.addChannelTypes(ChannelType.GuildText)
		)
		.addBooleanOption((option) =>
			option.setName("embed").setDescription("Whether or not the echo should be embedded.")
		),
	async execute(interaction) {},
};
