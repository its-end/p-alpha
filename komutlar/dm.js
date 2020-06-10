const Discord = require('discord.js');
const settings = require('../ayarlar.json');

exports.run = (client, message, args) =>{
  let res = message.content.split(' ').slice(2).join(' ');
  
  if(!args){
    return message.reply('Write Something!');
  };
  
  
  
  if(message.author.id === '662867649365147705'){
    return message.channel.send('Sen spammer nepzysin dimi sq');
  };
  
  const user = message.mentions.users.first();
  
  if(!user){
    return message.reply('Mention Someone!');
  };
  
  return user.send(res).then(() =>{
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
  name : 'dm',
  description : 'DM To Someone With Bot',
  usage : 'dm'
};