const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === `${prefix}ping`) {
		message.channel.send('Pong.');
	} else if (message.content === `${prefix}beep`) {
		message.channel.send('Boop.');
	}

client.login(process.env.BOT_TOKEN);
