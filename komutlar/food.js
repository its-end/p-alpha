const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = (client, message, args) => {

 const embed = new Discord.RichEmbed()
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'food'})
    .end((err, response) => {
      const embed1 = new Discord.RichEmbed()
      .setAuthor(`food!`)
      .setTitle("Click to Go to Picture")
      .setImage(response.body.message)
      .setColor("RANDOM")
      .setURL(response.body.message)
      message.channel.send(embed1);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'food',
  description: 'Mama Mama I am Hungry!',
  usage: 'food'
};