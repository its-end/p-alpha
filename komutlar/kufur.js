const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) =>{
  if(!args[0]){
    return message.channel.send('Wrong usage. Please use `on` or `off`');
  };
  
  let kufur = await db.fetch(`kufur_${message.guild.id}`);
  
  if(args === 'on'){
    await db.set(`kufur_${message.guild.id}`,'on');
    const on = new Discord.RichEmbed()
    .setTitle('Auto Mod Has Been Updated!')
    .setColor('RANDOM')
    .setDescription(`Okay ${message.author}. I set Auto Mod to \`on\`. You can set it to \`off\` with +oto-mod off`)
    .setThumbnail(client.user.avatarURL)
    .setTimestamp();
   return message.channel.send(on);
  }
  
  if(args === 'off'){
  await db.set(`kufur_${message.guild.id}`,'off');
    const embed = new Discord.RichEmbed()
   .setTitle('Auto Mod Has Been Updated!')
   .setColor('RANDOM')
   .setDescription(`Okay ${message.author}. I set Auto Mod to \`off\`. You can set it to \`on\` with +oto-mod on`)
   .setThumbnail(client.user.avatarURL)
   .setTimestamp();
  return message.channel.send(embed);
};
};

exports.conf = {
  enabled : true,
  guildOnly : true,
  aliases : [],
  permLevel : 0
};

exports.help = {
  name : 'auto-mod',
  description : 'Enabling/Disabling Auto Mod',
  usage : 'auto-mod on/off'
};