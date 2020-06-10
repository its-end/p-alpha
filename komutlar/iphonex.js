const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.channel.startTyping();
  let tr = args.slice(0).join(" ");
  if (tr.length < 1) return message.reply("write something");
  var request = require("request");
  request(
    `https://nekobot.xyz/api/imagegen?type=iphonex&text=${tr}`,
    function(error, response, body) {
      if (error) return console.log("error:", error);
      else if (!error) {
        var tr = JSON.parse(body);
        const embed = new Discord.RichEmbed()
          .setColor("RED")
          .setTitle("Click to Go to Picture")
          .setURL(tr.message)
          .setImage(tr.message);
        return message.channel.send(embed);
        message.channel.send(embed);
      }
    }
  );
  message.channel.stopTyping();
  message.channel.stopTyping();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cmm'],
  permLevel : 0
};

exports.help = {
  name: "iphonex",
  description: "WooHoo",
  usage: "cmm <im not white>"
};