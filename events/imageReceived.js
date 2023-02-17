const { v4: uuid } = require("uuid");
const request = require("request");
const fs = require("fs");

module.exports = (client) => {
	client.on("message", async (msg) => {
		if (msg.attachments.size > 0) {
			const url = msg.attachments.first().url;
			if (url.startsWith("https://cdn.discordapp.com")) {
				const imageName = uuid() + ".jpg";
				const file = fs.createWriteStream(imageName);
				request(url)
					.pipe(file)
					.on("close", () => {
						console.log(`Saved image: ${imageName}`);
					});
			}
		}
	});
};
