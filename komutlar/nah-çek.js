const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async(client, message) => {
  let resimler = [
    "https://i.hizliresim.com/7B0Q7a.jpg",
    "https://i.hizliresim.com/gP3b2b.jpg",
    "https://i.hizliresim.com/VQqBPR.jpg",
    "https://i.hizliresim.com/nb8yja.jpg",
    "https://i.hizliresim.com/1pQ7Vb.jpg",
    "https://i.hizliresim.com/LvVGZz.jpg",
    "https://i.hizliresim.com/r0ly6z.jpg"
  ];
  
  let nah = await db.fetch(`nah_${message.author.id}`);
  db.add(`nah_${message.author.id}`, 1);
  
  
  if(nah === null){
    return db.set(`nah_${message.author.id}`,0);
  };
  
  let sonuç = Math.floor(Math.random() * resimler.length);
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(`**${message.author.username}** nah çekti!`)
    .setImage(`${resimler[sonuç]}`)
    .setFooter(`${nah} Kere Ebenize Nah Çekti`);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["nah", "nahçcek"],
  permLevel: 0
};
exports.help = {
  name: "nah-çek",
  description: "WTF is this?",
  usage: "nahçek"
};