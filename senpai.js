const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");
var collector;
var chatlog;
var msg;
var commanding = false;

if (!commanding){
	client.on("message", message => {
	if(message.author.id !== config.onee) return;
	if (message.content.includes("senpai?")) { 
	commanding=true;
	
	message.channel.send("Yes Onee?");
	}
})
}
 if (commanding && (message.author.id == config.onee)){
	 collector = channel.createMessageCollector();
	 client.on("message", message => {
		 if(message.content.contains("sic em")) {
			 collector.stop();
			 collector.on('end', chatlog = collected);
			 msg = channel.fetchMessage(chatlog.last());
			 msg => console.log(message.content);
	 }
 })
 }
client.login(config.token);
	