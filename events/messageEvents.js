const { Events } = require("discord.js");

// An event listener for incoming messages received in the bot's channel:
module.exports = {
	name: Events.MessageCreate,
	execute(message) {
		try {
			if (message.attachments.size === 0) {
				// if there are no attachments in the received message:
				const message_content = message.content; // Save the message content.
				console.log(`Message text content: \n"${message_content}"`); // log the received message.
				console.log("No attachments found.\n");
			} else {
				// if there are attachments in the received message:
				console.log("Attachment(s) found.");
				const attachment = message.attachments.first(); // Get the attachment object
				console.log(`Image URL:	\n${attachment.url}\n`); // Log the URL of the image attachment.
			}
		} catch (error) {
			console.error(error); // Log any error that may have occurred.
		}
	},
};
