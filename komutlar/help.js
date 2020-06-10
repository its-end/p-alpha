const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed();
  embed.setColor('RANDOM');
  embed.setTitle('There is my commands!');
  embed.setDescription(`Prefix is \`+\`. Commands are : \n${client.commands.map(props => `\`${props.help.name} - ${props.help.description}\``).join("\n")}`);
  embed.setThumbnail(message.author.avatarURL);
  embed.setTimestamp();
  embed.setFooter('Developed by hénry');
  
  const embed2 = new Discord.RichEmbed();
  embed2.setTitle('Help Command!');
  embed2.setColor('RANDOM');
  embed2.setTimestamp();
  embed2.setFooter(`Developed by hénry`);
  embed2.setDescription(`I sent my command list to your DMs, ${message.author}. If there are not anything, maybe your DMs are closed.`);
  embed2.setThumbnail(message.author.avatarURL);
  
  
  
  message.channel.send('_ Please Wait..._').then(msg =>{
   msg.edit(embed2);
   msg.react('❤️');
  });
  
  message.react('🤗');
    try {
        await message.author.send(embed);
    } catch (e) {
        throw e;
    }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Showing all commands.',
  usage: 'help'
};
