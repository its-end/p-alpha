const Discord = require('discord.js');

exports.run = async(client, message, args) =>{
  let user = message.mentions.users.first();
  let log = message.guild.channels.find(c => c.name === 'logs');
  
  if(!log){
    return message.channel.send('Bip Bop.. Error.. I can\'t find channel named `logs`. Type `yes` for create log channel.');
    message.channel.awaitMessages(res => res.content === 'yes',{
    max : 1,
    time : 10000,
    errors : ['time']
    }).then((collected) =>{
      message.guild.createChannel('logs','text')
    }).catch(() =>{
      message.channel.send('Time ended.')
    });
  };
    
    
  let reason = message.content.split(' ').slice(2).join(' ');
  
  if(!user){
   return message.channel.send('<a:carp:716401017104760905> Bir kullanıcı gir!');
  }         //
  if(!reason){
    return message.channel.send('<a:carp:716401017104760905> Bir sebep gir!');
 }
  
  let embed = new Discord.RichEmbed()
  .setTitle('Birileri Yargı Dağıtmış!')
  .setColor('RANDOM')
  .setThumbnail(user.avatarURL)
  .setFooter('Central')
  .setTimestamp()
  .addField('Yargı dağıtan kişi : ', message.author,true)
  .addField('Yargılanan kişi : ', user.tag, true)
  .addField('Sebep :', reason, true)
  .addField('Olayın gerçekleştiği kanal :', `<#${message.channel.id}>`,true)
  
  return message.guild.ban(user.id).then(() =>{
    message.channel.send(`<a:tikk2:716682720796868618> İşlem başarılı ${message.author}, ${user.tag} kullanıcısını sunucudan banladım!`).then(() =>{
    log.send(embed)
  });
  })
};

exports.conf = {
  enabled : true,
  guildOnly : true,
  aliases : [],
  permLevel : 0
};

exports.help = {
  name : 'ban',
  description : 'ban',
  usage : 'ban <kullanici> <sebep>'
};