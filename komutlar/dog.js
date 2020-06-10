const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    // if (!message.channel.nsfw) return message.channel.send('Kusura Bakmayın Bu Kanal NSFW Kanalı Değil!')
    superagent.get('https://nekos.life/api/v2/img/woof')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`Doge!`)
      .setTitle("Click For Picture!")
      .setImage(response.body.url)
      .setColor("RANDOM")
      .setURL(response.body.url);
  message.channel.send(embed);
    })
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dog',
  description: 'random dog pics',
  usage: 'doge'
};