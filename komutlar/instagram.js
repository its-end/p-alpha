const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports.run = async (client, message, args) => {
  const name = args;

  if (!name) {
    const embed2 = new RichEmbed()
      .setColor("RED")
      .addField("hata", "⛔ ``ex: +instagram <user_name>``");
    return message.reply(embed2).then(m => m.delete(5000));
  }

  const url = `https://instagram.com/${name}/?__a=1`;

  let res;

  try {
    res = await fetch(url).then(url => url.json());
  } catch (e) {
    const embed3 = new RichEmbed()
      .setColor("RED")
      .addField(
        "hata",
        `⛔ \`\`We can't find account named ${name}\`\``
      );
    return message.reply(embed3).then(m => m.delete(5000));
  }

  const account = res.graphql.user;

  const embed = new RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setTitle(account.full_name)
    .setURL(`https://instagram.com/${name}`)
    .setThumbnail(account.profile_pic_url_hd)
    .addField(
      "About Profile",
      stripIndents`**- Username:** ${account.username}
            **- Name:** ${account.full_name}
            **- Bio:** ${
              account.biography.length == 0 ? "none" : account.biography
            }
            **- Posts:** ${account.edge_owner_to_timeline_media.count}
            **- Followers:** ${account.edge_followed_by.count}
            **- Following:** ${account.edge_follow.count}
            **- Private:** ${
              account.is_private ? " 🔐" : " 🔓"
            }`
    );

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["insta"],
  permLevel: 0
};

exports.help = {
  name: "instagram",
  description: "Info about instagram accounts.",
  usage: "instagram <user_name>"
};