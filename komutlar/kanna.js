const Discord = require("discord.js");
const get = require("superagent");
const settings = require('../ayarlar.json');

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== settings.sahip) return;
  try {
    if (!args[0]) {
      message.channel.send("Missing Arguments.");
      return;
    }
    let url = `https://nekobot.xyz/api/imagegen?type=kannagen&text=${args}`;
    get(url).then(res => {
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(res.body.message)
        .setFooter("Developed by hénry");
      setTimeout(() => {
        return message.channel.send(embed);
      }, 100);
    });
  } catch (err) {
    console.log(err);
  }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "kanna",
  description: "Kanna !",
  usage: "kanna <yazı>"
};