const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`Lays Bot Aktif Edildi`);
  client.user.setStatus("idle");
  client.user.setActivity(`V0.3 Güncellemesi Yakında!  💙 Lays | lyyardım | lydavet | `, { type: "LISTENING", browser: "Discord IOS" });
  
                          

  
};