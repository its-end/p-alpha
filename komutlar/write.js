const Discord = require('discord.js');

exports.run = function(client, message, args){
  if(!args){
    return message.channel.send('Write something!');
  };
  
  const embed = new Discord.RichEmbed();
  
  embed.setTitle(args);
  embed.setColor('RANDOM');
  
  return message.channel.send(embed).then(() =>{
    message.delete(30);
  });
};

exports.conf = {
  enabled : true,
  guildOnly : true,
  aliases : [], 
  permLevel : 0
};

exports.help = {
  name : 'send',
  description : 'Sending what you want',
  usage : 'send <hello>'
};