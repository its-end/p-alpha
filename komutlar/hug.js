const superagent = require("snekfetch");
const Discord = require('discord.js');
const db = require('quick.db');
const cooldown = new Set();

exports.run = async (client, message, args, level) => {
    const user = message.mentions.users.first();

  if(!user){
    return message.channel.send('Birilerini etiketle.');
  };
  if(cooldown.has(message.author.id)){
     return message.channel.send('Aşkınızı bölmek istemem ama.. 1 dakika bekleseniz? Hazır Ramazandayız :>');
  };
  
  cooldown.add(message.author.id);
  
  setTimeout(() =>{
    cooldown.delete(message.author.id);
  },60000);
  
  
  let time = await db.add(`hug_${message.author.id}_${user.id}`,1);
  if(time === null){
    return time = await db.set(`hug_${message.author.id}_${user.id}`,0);
  };
    // if (!message.channel.nsfw) return message.channel.send('This channel is not an ``NSFW`` channel!')
    superagent.get('https://nekos.life/api/v2/img/hug')
        .end((err, response) => {
      const embed = new Discord.RichEmbed()
      .setAuthor(`${message.author.username} Hugged ${user.username} !`)
      .setTitle("Click For Picture")
      .setImage(response.body.url)
      .setColor("RANDOM")
      .setURL(response.body.url)
      .setFooter(`Hugged for ${time} times`);
  message.channel.send(embed);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hug',
  description: 'how about a hug',
  usage: 'hug'
};