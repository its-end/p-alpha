const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if(message.author.id !== ayarlar.sahip){
    return message.channel.send('Bunu ancak **hénry** kullana bilir!');
  };
  
message.delete();
message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('If you accepting it, type  => `31` <=').setFooter('Pst, you have 15 second!', client.user.avatarURL).setTimestamp())
.then(() => {
message.channel.awaitMessages(response => response.content === '31', {
max: 1,
time: 15000,
errors: ['time'],
})
.then((collected) => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Reboot;').setDescription('Verified ! Restarting bot..').setFooter('Hénry', client.user.avatarURL).setTimestamp()).then(msg => {
console.log(`BOT : Yeniden Başlatılıyor...`);
process.exit(0);
})
})
.catch(() => {
  message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Restarting again..').setDescription('Rejected!').setFooter('Hénry', client.user.avatarURL).setTimestamp())
});
});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Restart bot.',
  usage: 'reboot'
};