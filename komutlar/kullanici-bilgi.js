const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const mesajsilindi = new Discord.RichEmbed()
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xD97634)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(':fire: Sorry, but you can\'t do it!')
  return message.author.sendEmbed(ozelmesajuyari); }    
  if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      const mesajsilindi = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setColor('RANDOM')
      .setTimestamp()
      .addField('Username', message.author.username + '#' + message.author.discriminator)
      .addField('ID', message.author.id)
      .addField('Registered on', message.author.createdAt)
      .addField('Status', durm)
      .addField('Playing', message.author.presence.game ? message.author.presence.game.name : 'User is not playing anything at thr moment!')
      .setFooter('Have fun!', client.user.avatarURL)
      console.log(`${message.author} Bu Komutu ${message.channel} Kanalında Kullandı`)
      return message.channel.sendEmbed(mesajsilindi);
      return message.channel.sendEmbed(kullanicibilgimk)
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı', 'kullanıcı bilgim', 'kbilgim'],
  permLevel: 0
};

exports.help = {
  name: 'user-info',
  description: 'User info',
  usage: 'user-info'
}