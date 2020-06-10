const request = require("request-promise-native");

const api = "2e03af5532b91b920cf00f2f2c5117f8";

exports.run = async (Bastion, message, args) => {
  try {
    let song = args.slice(0).join(" ");
    if (!song) {
      return message.reply("**Correct Usage**: lyrics <music>");
    }

    let options = {
      headers: {
        Accept: "Accept: application/json"
      },
      url: `https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=json&q_track=${encodeURIComponent(
        song
      )}&apikey=${api}`,
      json: true
    };
    let response = await request(options);

    if (response.message.header.status_code === 200) {
      message.channel
        .send({
          embed: {
            color: 0x00ae86,
            title: `${song.toUpperCase()} - Lyrics`,
            description: response.message.body.lyrics.lyrics_body.replace(
              "******* Bu lyrics, ticari kullanım için değildir. *******",
              `You Can Find Fully Lyrics Here: [musixmatch.com](${response.message.body.lyrics.backlink_url} 'Musixmatch')`
            )
          }
        })
        .catch(e => {
          console.log(e);
        });
    } else if (response.message.header.status_code === 404) {
      message.channel
        .send({
          embed: {
            color: 0x00ae86,
            title: "Not Found",
            description: `Can't find music named **${song.toUpperCase()}** .\If you think you writed music name correctly, please try again with music's author name.`
          }
        })
        .catch(e => {
          console.log(e);
        });
    }
  } catch (e) {
    if (e.response) {
      return Bastion.emit(
        "error",
        e.response.statusCode,
        e.response.statusMessage,
        message.channel
      );
    }
    console.log(e);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lyric"],
  permLevel: 0
};

exports.help = {
  name: "lyrics",
  description: "music lyrics",
  usage: "lyrics <music>"
};