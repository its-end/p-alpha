const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return 
 
 }

var bos = "Searching..."

    let store = message.content.split(' ').slice(1).join('+');

        let link = `https://play.google.com/store/search?q=` + store;
        if(!store)return message.channel.send("Which game are you looking for? **Usage : ** `+playstore PUBG`")
        if(!link)return message.channel.send("Can't Find Game.")
        let embed = new Discord.RichEmbed()
    
     .setColor('RANDOM')
    .setTimestamp()
    .addField('Play Store', `${bos}`, true)
    .addField("Game Name :", `${args}`, true)
    .addField('Link:', `${link}`, true)
    .setThumbnail('https://i.amz.mshcdn.com/K1p5PL4669x6LLyGzxlqe25Xtsc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F475500%2Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png', true)
    .setFooter("Play Store", message.author.avatarURL, true);
          
    message.channel.send(embed);
 
}

exports.conf =
{
  aliases: []
}

exports.help =
{
  name: "playstore",
  description: "Search Games in Play Store.",
  usage: "playstore"
}