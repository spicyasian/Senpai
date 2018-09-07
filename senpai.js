const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");
//const response = require("./responses.json");
let stats = JSON.parse(fs.readFileSync("./status.json", "utf8"));
var onee;
let commanding = stats["commanding"];
let defending = stats["defending"];
console.log("yeet");

client.on("message", message => {
	var contents = message.content.toLowerCase()
	if(message.author.id == config.onee){
		onee = true;
	}
	else onee = false;
	
	if (commanding==false){
	if (contents.includes("senpai?")&& onee) { 
	commanding=true;
	message.channel.send("Yes Onee?");
	}
	//else{
		//for(i = 0;i<response.greetings.length;i++){
	}
	
if(defending){
 if(message.author.id==173650807542120448){
 message.channel.send("Fuck off, Herb");}
}
 
 if (commanding==true){
	 
		 if(message.author.id == config.onee){
		 if(contents.includes("goodbye")){
			 commanding = false;
			 message.channel.send("It's been a pleasure serving you, Onee!");
		 }
		if(contents.includes("sic em")) {
			message.channel.fetchMessages({limit:1,before:message.id})
			.then(messages =>{kick(messages)})
			.catch();
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
