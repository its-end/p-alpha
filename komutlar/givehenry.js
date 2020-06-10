const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) =>{
  if(message.author.id !== ayarlar.sahip){
    return message.channel.send('Only **hénry** can use it!');
  };
  
  let amount = message.content.split(" ").slice(2).join(' ');
  
  let user = message.mentions.users.first()
  
  if(!user){
    return message.channel.send('Mention someone!');
  };
  
  await db.add(`money_${user.id}`, amount);

  const embed = new Discord.RichEmbed();
  embed.setTitle('Uh oh seems like Henry gave to someone money!');
  embed.setColor('RANDOM');
  embed.addField('Amount : ', amount, true);
  embed.addField('Lucky man : ', user,true);
  embed.addField('Items :','Soon..',true);
  embed.setThumbnail(user.avatarURL);
  embed.setTimestamp();
  message.channel.send(embed);
  
 

};

exports.conf = {
  enabled : true,
  guildOnly : true,
  aliases : [],
  permLevel : 4
};

exports.help = {
  name : 'give-money',
  description : 'Giving money (Only Henry can use it)',
  usage : 'give-money <amount>'
};