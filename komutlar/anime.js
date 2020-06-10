const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    // if (!message.channel.nsfw) return message.channel.send('This channel is not an ``NSFW`` channel!')
    superagent.get('https://nekos.life/api/v2/img/avatar')
        .end((err, response, body) => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`Avatar!`)
      .setTitle("Click for Picture")
      .setImage(response.body.url)
      .setColor("RANDOM")
      .setURL(response.body.url);
      return message.channel.send(embed);
    })
    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'anime',
  description: 'anime avatars',
  usage: 'animeavatar'
};