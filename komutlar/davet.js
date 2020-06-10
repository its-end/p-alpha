const Discord = require('discord.js');

exports.run = async(client, message, args) =>{
  const embed = new Discord.RichEmbed();
  embed.setTitle('Invite Link!');
  embed.setColor('RANDOM');
  embed.addField('For bot\' invite link', `[Click](https://discord.com/oauth2/authorize?client_id=710563529006252093&permissions=8&scope=bot)`,true);
  embed.addField('For bot\'s support server',` [Click](https://discord.gg/PtBZUMz)`, true);
  embed.setTimestamp();
  embed.setFooter('Project Alpha v0.5');
  embed.setThumbnail(client.user.avatarURL);
  
  message.channel.send(embed);
};

exports.conf = {
  enabled : true,
  guildOnly : false,
  aliases : [],
  permLevel : 0
};

exports.help = {
  name : 'invite',
  description : 'For Bot and Support Server\'s invite link!',
  usage : 'davet'
};


