const Discord = require('discord.js');
const settings = require('../ayarlar.json');

exports.run = async(client, message, args) =>{
  if(message.author.id !== settings.sahip){
    return message.channel.send('Bunu ancak **hénry** kullana bilir!');
  };
  
  if(args.match(/(client.token)/g)){
     let msg = await message.channel.send('Al Tokenim :D');
     msg.react('😂');
};
  
  try {
      const code = args;
      let evaled = eval(code);
    
    
      function clean(text){
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      };
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\ \`\`\`xl\n${err}\n\`\`\``);
    }
};

exports.conf = {
  enabled : true,
  guildOnly : true,
  aliases : ['e'],
  permLevel : 0
};

exports.help = {
  name : 'eval',
  description : '.',
  usage : 'eval'
};

