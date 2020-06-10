const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (client, message, args) => {
    let cooldown = 1.728e+8, // 24 saat
        amount = Math.floor(Math.random() * 10) + 200;      

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`);
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily));
        const embed = new Discord.RichEmbed()
        .setTitle('Daily Prize!')
        .setColor('RANDOM')
        .setDescription(`Please wait for **${timeObj.hours} hour ${timeObj.minutes} minute ${timeObj.seconds} second!**`)
        message.channel.send(embed);
        return
    } else {
        const Durum = await db.fetch(`bonus_${message.author.id}`);
        var tbns = ''
    //   if (tplnB == '1' || tplnB == '2' || tplnB == '3' || tplnB == '4' || tplnB === null || tplnB == '0') { var tbns = `0` }
  
        const embed = new Discord.RichEmbed()
        .addField('Received!', `Daily Prize : **${amount}$**`)
        .setColor('RANDOM')
        message.channel.send(embed);
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`money_${message.author.id}`, amount);
   }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['daily'],
  permLevel: 0,
};

exports.help = {
  name: 'daily-money',
  description: 'Gives daily Prize!',
  usage: 'daily-money',
   
};