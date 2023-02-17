const axios = require("axios");
const fs = require("fs");
const uuid = require("uuid").v4;

module.exports = (client) => {
	client.on("message", async (msg) => {
		if (msg.attachments.size > 0) {
			const url = msg.attachments.first().url;
			if (url.startsWith("https://cdn.discordapp.com")) {
				const imageName = uuid() + ".jpg";
				const writer = fs.createWriteStream(imageName);

				try {
					const response = await axios({
						url,
						method: "GET",
						responseType: "stream",
					});

					response.data.pipe(writer);

					writer.on("finish", () => {
						console.log(`Saved image: ${imageName}`);
					});
				} catch (err) {
					console.log("Error:", err);
				}
			}
		}
	});
};
