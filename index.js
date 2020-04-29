const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	}
});

client.login('NzA0NzEzNTY1OTEwODU5ODA4.XqhJxA.NPEdkTmAiQ7HNGzM3TN0cu1Iw4k');