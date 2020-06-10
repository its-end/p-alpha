const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.get(args[0]))
    let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.get(args[1]))
    var s = message.author
    if(member2) {
        var s = member2.user
    }
    if(!member) {
        const embed = new Discord.RichEmbed()
            .setDescription(`Please mention someone.`)
    .setAuthor('Error')
            .setColor("#F00")
            .setTimestamp()
        message.channel.send({embed})
        return
    }
    var anasonuc = Math.floor(Math.random() * 101)
    var kalp = ''
    var akalp = ''
    anasonuc = 100;
    if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
        var c = 0
        for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
            kalp += '❤️'
            c++
        }
        for(var x = c; x < 10; x++) {
            akalp += `🖤`
        }
    } else {
        var kalp = '🖤'
        var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
    }
    var yorum = 'Oh, seems like you two can marry!'
    if(anasonuc < 80) {
        var yorum = 'Can you try a bit?'
    }
    if(anasonuc < 60) {
        var yorum = 'Umm.. Not bad!'
    }
    if(anasonuc < 40) {
        var yorum = 'Why are you not trying to say \'I love you?\''
    }
    if(anasonuc < 20) {
        var yorum = 'Sorry but impossible :/'
    }

    const embed = new Discord.RichEmbed()
        .setAuthor(`${member.user.tag} and ${s.tag} Shipping! `)
        .setDescription(`Love Degree: ${anasonuc}\n${kalp}${akalp}\n\n${yorum}`)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({embed})
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['love','love-ship'],
    permLevel: 0
}
exports.help = {
    name: 'ship',
    description: 'Shipping who you want, but use it careful :>',
    usage: 'ship <user>'
}