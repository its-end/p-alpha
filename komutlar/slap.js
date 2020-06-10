const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
  const user = message.mentions.users.first();
    // if (!message.channel.nsfw) return message.channel.send('This channel is not an ``NSFW`` channel!')
    superagent.get('https://nekos.life/api/v2/img/slap')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username} Slapped ${user.username}`)
      .setTitle("Click For Picture")
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
  name: 'slap',
  description: 'Who wants anime slap?',
  usage: 'slap'
};