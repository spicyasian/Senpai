const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("NDIxOTI4NDQ1NDk3NTczMzc3.DnDvGw.sjU7kFIsGCsSR7hzVQhEE4OKk2I");