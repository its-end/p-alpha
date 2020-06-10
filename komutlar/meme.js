const superagent = require("snekfetch");
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => {
  superagent.get("https://meme-api.glitch.me/dank").end((err, response) => {
    let MEME = new Discord.RichEmbed()
      .setAuthor(`Dank Meme!`)
      .setTitle("Click For Picture")
      .setImage(response.body.meme)
      .setColor("RANDOM")
      .setURL(response.body.meme);
    message.channel.send(MEME);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "meme",
  description: "Sending memes for FUN!",
  usage: "meme"
};