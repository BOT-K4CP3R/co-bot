const discord = require('discord.js');
require('discord-reply');
const client = new discord.Client();
const config = require("./config.json")

client.on('ready', () => {
  console.log("Bot gotowy do pracy")
});

client.on('message', async message => {
  if (message.content.startsWith('co')) {
    message.lineReplyNoMention(`Jajco 🥚`);
  }
});

client.login(config.token);