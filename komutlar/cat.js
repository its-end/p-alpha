const Discord = require('discord.js');
var request = require('request');

exports.run = (client, message, args) => {

request(`http://aws.random.cat/meow`, function (error, response, body) {
    if (error) return console.log('Hata:', error); 
    else if (!error) { 
        var info = JSON.parse(body);
          let catembed = new Discord.RichEmbed()
          .setColor("RANDOM")
          .setTitle("MEEOOOWWW 🐱")
          .setImage(info.file);

  message.channel.send(catembed);
    }
});
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['kedi'],
  permLevel: 0
};

exports.help = {
    name: 'cat',
  description: 'Random Cat Throws Photo.',
  usage: 'cat'
};