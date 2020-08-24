const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
   const Bakım = new Discord.MessageEmbed()
 .setTitle(' Upss Upss')
 .setColor("0083ff")
  .setDescription(" | Bakımda Olduğum İçin Komut Kullanılması Yasaklandı \n <a:ayar:738297650230722660> | Bakım Sebebi: Hatalar Düzeltiliyor  \n <a:tac:730709347386130522> | Lays Bot Kurucular Tarafından Bakıma Alında")
.setFooter(`Bakım İçin Üzgünüz`)
if(db.fetch(`bakımabi`)) return message.channel.send(Bakım)
let rays = args.slice(0).join(' ')

if (!rays) return message.reply('Öneri Yazman Lazım!')
  
  message.reply('Önerinizi Belirttim! Teşekkür Ederiz')
  const sa = new Discord.MessageEmbed()
  .setTitle('Öneri Var!')
  .setTimestamp()
  .setColor("RED")
  .setFooter('Lays Öneri Sistemi')
  .addField('Öneriyi Yapan Kişi', `<@${message.author.id}>`,true)
  .addField('Öneri', rays,true)
  client.channels.cache.get('742272003955753070').send(sa)
  
}
exports.conf = {
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "öneri"
}