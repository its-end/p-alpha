const Discord = require('discord.js');

exports.run = async(client, message, args) =>{
  if(!args){
    return message.channel.send('Enter a number for clear messages!');
  };
  
  if(message.member.hasPermission('MANAGE_MESSAGES')){
    return;
  };
  
  
  const embed = new Discord.RichEmbed()
  .setTitle('Someone Cleared Messages!')
  .setColor('RANDOM')
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .setDescription(`Author : ${message.author}\nDeleted Messages Count : ${args}`);
  
  return message.channel.bulkDelete(args + 1).then(() =>{
    message.channel.send(embed);
  });
};

exports.conf = {
  enabled : true,
  guildOnly : true,
  aliases : [],
  permLevel : 0
};

exports.help = {
  name : 'clear',
  description : 'Clearing Messages',
  usage : 'clear <number>'
};
