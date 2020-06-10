const Discord = require('discord.js');

exports.run = async(client, message, args) =>{
  const user = message.mentions.users.first();
  
  if(user){
    const embed = new Discord.RichEmbed()
    .setTitle(`${user.tag}'s Avatar`)
    .setImage(user.avatarURL)
    .setColor('RANDOM');
    return message.channel.send(embed);
  };
  
  if(!user){
    const embed2 = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}'s Avatar`)
    .setImage(message.author.avatarURL)
    .setColor('RANDOM');
    
    return message.channel.send(embed2);
  };
  
};

exports.conf = {
  enabled : true,
  guildOnly : false,
  aliases : ["avatar","pp"],
  permLevel : 0
};

exports.help = {
  name : 'av',
  description : 'Avatarları Gösterir',
  usage : 'av'
};