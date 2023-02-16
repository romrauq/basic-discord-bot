// require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js"); // Import/destructure class from discord.js library
const { token } = require("../config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Create a new instance of the Client class:

// Collection (class) is used to store & efficiently retrieve commands for execution.
client.commands = new Collection();

// An event listener that is fired when the bot successfully logs in:
client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Get string of path to "../commands" directory:
const commandsPath = path.join(__dirname, "commands");
// Get command files within "../commands" directory:
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

// Dynamically retrieve your command files for access from this  "./bot.js" file:
for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ("data" in command && "execute" in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(
			`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
		);
	}
}

// Create listener for Client#event:interactionCreate event that will execute whenever your application receives an interaction:
client.on(Events.InteractionCreate, async (interaction) => {
	if (!interaction.isChatInputCommand()) return;
	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({
			content: "There was an error while executing this command!",
			ephemeral: true,
		});
	}
});

client.login(token);
