const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) =>{
  
  if(!message.member.hasPermission('MANAGE_CHANNELS')){
    
    return;
  };
  
  let kanal = message.mentions.channels.first();
  
  let logs = await db.fetch(`log.${message.guild}`);
  
  if(!kanal){
    return message.channel.send('Please mention channel.');
  };
  
  const embed = new Discord.RichEmbed();
  embed.setTitle('Ban Log!');
  embed.setColor('RANDOM');
  embed.setDescription(`Log ayarlandı ! Artık tüm moderasyon işlemleri <#${kanal.id}> kanalında olacak!`);
  embed.setFooter(`${message.author.tag} tarafından istendi.`);
  embed.setTimestamp();
  message.channel.send(embed);
  
}

exports.conf = {
  enabled : true,
  guildOnly : true,
  aliases : [],
  permLevel : 0
};

exports.help = {
  name : 'log',
  description : 'Ban Log.',
  usage : 'ban-log <kanal>'
};