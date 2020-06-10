const { Discord , RichEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
  const text = args;
   if(!text) return message.channel.send(`bir şeyler yaz \`\`pic merhaba dünya\`\``)
  const pic = `https://dummyimage.com/2000x500/33363c/8960db&text=${text}`.replace(' ', '+')
  const embed = new RichEmbed()
  .setImage(pic)
  .setColor("RANDOM")
  .setFooter("Developed by Tuncay and Oskaree")



  message.channel.send(embed)
};
exports.conf = {
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'picture',
    description: 'Changing to the picture what you write',
    usage: 'pic <text>'
};