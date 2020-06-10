const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Warning :warning:', '`You can\'t use this command in DMs.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .addField('Tag :', message.guild.members.filter( h => h.user.username.includes('h')).size,true)
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Name', message.guild.name)
    .addField('ID', message.guild.id)
    .addField('Defaul channel ', message.guild.defaultChannel ? undefined : 'Belirlenmedi')
    .addField('Region', message.guild.region)
    .addField('Member Count', message.guild.memberCount)
    .addField('Owner', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Channel size', message.guild.channels.size)
    .addField('Created At', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'server-info',
  description: 'Giving info about server',
  usage: 'server-info'
};