const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) =>{
  let bal = await db.fetch(`money_${message.author.id}`);
  let user = message.mentions.users.first();
  
  if(bal === null){
    return bal = await db.set(`money_${message.author.id}`,0);
  };
  
  if(bal === '1e+60'){
    return bal = bal;
  };
  
  const embed = new Discord.RichEmbed();
  embed.setAuthor(message.author.username);
  embed.setTitle('Balance!');
  embed.setColor('RANDOM');
  embed.addField('Balance :', `${bal}`, true);
  embed.setTimestamp();
  embed.setAuthor(message.author.tag);
  embed.addField('Items', 'Soon..',true);
  embed.setFooter(`Try +daily for daily credit!`);
  embed.setThumbnail(message.author.avatarURL);
  
  await message.channel.send(embed);
  
};

exports.conf = {
  enabled : true,
  guildOnly : false,
  aliases : ['bal','money'],
  permLevel : 0
};

exports.help = {
  name : 'balance',
  description : 'Showing your money',
  usage : 'bal'
};