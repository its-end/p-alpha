const VexTools = require('vex-tools'),
             VEX = new VexTools("b8q8cmWhtDuutusT3TDILVTtvz");
const Discord = require('discord.js');

exports.run = async (client, message, args) => {
if (!args[0]) return message.channel.send(`:x: | Lütfen bir haber kategorisi **seçin.**\n\`\`\`md\n# gündem | dünya | ekonomi\`\`\``)
const haberler = await VEX.sondakika()

if (args[0] === "gündem") {
const embed = new Discord.RichEmbed() // Eğer Discord.js v12 kullanıyoranız RichEmbed() yerine MessageEmbed() yazmanız gerekmektedir.
.setTitle("Sondakika Gündem Haberleri")
.addField(`[${haberler.Gundem.haber1.baslik}](${haberler.Gundem.haber1.haberURL})`, `${haberler.Gundem.haber1.icerik}`)
embed.addField(`[${haberler.Gundem.haber2.baslik}](${haberler.Gundem.haber2.haberURL})`, `${haberler.Gundem.haber2.icerik}`)
embed.addField(`[${haberler.Gundem.haber3baslik}](${haberler.Gundem.haber3.haberURL})`, `${haberler.Gundem.haber3.icerik}`)
message.channel.send(embed)
}
if (args[0] === "dünya") {
const embed = new Discord.RichEmbed() // Eğer Discord.js v12 kullanıyoranız RichEmbed() yerine MessageEmbed() yazmanız gerekmektedir.
.setTitle("Sondakika Gündem Haberleri")
.addField(`[${haberler.Dunya.haber1.baslik}](${haberler.Dunya.haber1.haberURL})`, `${haberler.Dunya.haber1.icerik}`)
embed.addField(`[${haberler.Dunya.haber2.baslik}](${haberler.Dunya.haber2.haberURL})`, `${haberler.Dunya.haber2.icerik}`)
embed.addField(`[${haberler.Dunya.haber3baslik}](${haberler.Dunya.haber3.haberURL})`, `${haberler.Dunya.haber3.icerik}`)
message.channel.send(embed)
}
if (args[0] === "ekonomi") {
const embed = new Discord.RichEmbed() // Eğer Discord.js v12 kullanıyoranız RichEmbed() yerine MessageEmbed() yazmanız gerekmektedir.
.setTitle("Sondakika Gündem Haberleri")
.addField(`[${haberler.Ekonomi.haber1.baslik}](${haberler.Ekonomi.haber1.haberURL})`, `${haberler.Ekonomi.haber1.icerik}`)
embed.addField(`[${haberler.Ekonomi.haber2.baslik}](${haberler.Ekonomi.haber2.haberURL})`, `${haberler.Ekonomi.haber2.icerik}`)
embed.addField(`[${haberler.Ekonomi.haber3baslik}](${haberler.Ekonomi.haber3.haberURL})`, `${haberler.Ekonomi.haber3.icerik}`)
message.channel.send(embed)
}
}
exports.conf = {
guildOnly: true,
enabled: true,
aliases: [],
permLevel:0
}
exports.help = {
name: "sondakika",
description: "Sondakika haberlerini gösterir.",
usage: "sondakika <gündem/ekonomi/dünya>"
}
    
