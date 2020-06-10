const Discord = require('discord.js');
const pass = require('generate-password');


exports.run = function(client, message, args) {
    var uzunluk = args;

    if (!uzunluk) return message.reply('Please give a length.. **Truth usage**: ?generate-password <length>')



    var password = pass.generate({
        length: uzunluk,
        numbers: true,
    })

    message.channel.send(password);
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'generate-password', 
  description: 'Password generator',
  usage: 'generate-password <length>'
};