const Discord = require('discord.js');
const os = require('os')
const moment = require('moment');
require('moment-duration-format');
const settings = require('../ayarlar.json');

  exports.run = async(client, message, args) =>{
    const duration = moment.duration(client.uptime).format(" D [Day], H [Hour], m [Minute], s [Second]");
  if(message.author.id !== settings.sahip){
    return message.channel.send('Bunu ancak **hénry** yapa bilir!');
  };
  
  let guilds = client.guilds.map( g =>{
    return g.name
  });
    
    let mem = process.memoryUsage().heapUsed / 1024 / 1024;
  
  const embed = new Discord.RichEmbed();
  embed.setTitle('My istatistics!');
  embed.setColor('RANDOM');
  embed.setThumbnail(client.user.avatarURL);
  embed.addField('Memory Usage : ', `${mem.toFixed(2)} MB`, true);
  embed.addField(`Guild : `, `${client.guilds.size} Guilds !`,true);
  embed.addField(`Member count : `,`${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,true);
  embed.addField('Guild\'s name : ', guilds, true);
  embed.addField(`Version : `,`v0.5`,true);
  embed.addField('Commands Length : ', `I have ${client.commands.map(p => p.help.name).length} commands for now!`,true);
  embed.addField('Uptime : ', duration, true);
  embed.setFooter('Developed by hénry');
  embed.setTimestamp();
  return message.channel.send(embed);
};

exports.conf = {
  enabled : true,
  guildOnly : false,
  aliases : ['ist'],
  permLevel : 0
};

exports.help = {
  name : 'istatistics',
  description : 'Shows istatistics',
  usage : 'istatistics'
};