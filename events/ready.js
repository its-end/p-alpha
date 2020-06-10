const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;


module.exports = client => {
  let confiq = ['dnd','idle','online'];
  let random = confiq[Math.floor(Math.random() * confiq.length)];
  console.log(`${client.user.username} giriş yaptı!`);
  setInterval(() =>{
  client.user.setStatus(random);
  }, 2000); //online = çevrimiçi   //dnd = rahatsız etmeyin   //idle = boşta`)
  setInterval(() =>{
  client.user.setActivity(`+help`, { type: "LISTENING"});  //LISTENING = DİNLİYOR  //WATCHING = İZLİYOR   //PLAYING = OYNUYOR 
  client.user.setActivity(`Developed by hénry`, { type : 'STREAMING'});
  }, 12000);
  console.log(`${client.user.username}: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
};
