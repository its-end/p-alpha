const superagent = require("snekfetch");
const Discord = require('discord.js')
const kuuldavn = new Set();

exports.run = async (client, message, args, level) => {


  var soru = args;
if(!soru) return message.channel.send(new Discord.RichEmbed().setColor('BLACK').setAuthor('wtf?').setDescription('write something dude this 8ball'))
  // if (!message.channel.nsfw) return message.channel.send('This channel is not an ``NSFW`` channel!')
    superagent.get('https://nekos.life/api/v2/img/8ball')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`8ball!`)
      .setTitle("8ball!")
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
  name: '8ball',
  description: 'classic 8ball(type something that should be)',
  usage: '8ball <thing>'
};