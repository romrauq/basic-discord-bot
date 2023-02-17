// require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Client, GatewayIntentBits, Collection } = require("discord.js"); // Import classes from discord.js library
const { token } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Create a new instance of the Client class:

// Collection (class) is used to store & efficiently retrieve commands for execution.
client.commands = new Collection();

// Get string of path to "../commands" directory:
const commandsPath = path.join(__dirname, "commands");
// Get command files within "../commands" directory:
const commandFiles = fs.readdirSync(commandsPath).filter((file) => file.endsWith(".js"));

// Dynamically retrieve command files for access from this  "./bot.js" file:
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

// Get directory path to events folder:
const eventsPath = path.join(__dirname, "events");
// Filter event files ending with ".js" extension within "../commands" directory:
const eventFiles = fs.readdirSync(eventsPath).filter((file) => file.endsWith(".js"));

// Dynamically retrieve event files in the "./events" directory:
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

client.login(token);
