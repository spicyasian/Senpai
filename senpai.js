const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
let stats = JSON.parse(fs.readFileSync("./status.json", "utf8"));
var collector;
let chatlog;
let commanding = stats["commanding"];
console.log("yeet");

client.on("message", message => {
	if (commanding==false){
	if(message.author.id !== config.onee) return;
	if (message.content.includes("senpai?")) { 
	commanding=true;
	message.channel.send("Yes Onee?");
	}

}
 if(message.author.id==173650807542120448){
 message.channel.send("Fuck off, Herb");}
 if (commanding==true){
	 
		 if(message.author.id == config.onee){
		 if(message.content.includes("goodbye")){
			 commanding = false;
			 message.channel.send("It's been a pleasure serving you, Onee!");
		 }
		if(message.content.includes("sic em")) {
			message.channel.fetchMessages({limit:1,before:message.id})
			.then(messages =>{kick(messages)})
			.catch();
			console.log(chatlog)
		//message.channel.send(msg.content);
			 }
		 }
 }
 	stats.commanding = commanding;
	fs.writeFile("./status.json", JSON.stringify(stats), (err) => console.error);
 })
function kick(messages){
	var msg = messages.first();
	
	var victim = msg.guild.member(msg.author);
	console.log(victim);
	victim.kick();
	msg.channel.send("Get Cucked " + msg.author.username);
	
}

client.login(config.token);
