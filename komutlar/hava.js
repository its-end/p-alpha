const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args, degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Please enter somewhere.').setColor('RANDOM'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint}'s Weather Status`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('Timezone : ',`UTC${location.timezone}`, true)
          .addField('Degree Type : ',location.degreetype, true)
          .addField('Temperature : ',`${current.temperature} Degree`, true)
          .addField('Weather : ', `${current.feelslike}`, true)
          .addField('Wind : ',current.winddisplay, true)
          .addField('Humidity : ', `${current.humidity}%`, true)
          message.channel.send({embed});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "0"
};

exports.help = {
  name: "weather",
  description: "Shows weather",
  usage: "weather"
};