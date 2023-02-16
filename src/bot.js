// require("dotenv").config();
const { token } = require("../config.json");

const { Client, Events, GatewayIntentBits } = require("discord.js"); // Import/destructure class from discord.js library
const client = new Client({ intents: [GatewayIntentBits.Guilds] }); // Create a new instance of the Client class:

// An event listener that is fired when the bot successfully logs in:
client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);
