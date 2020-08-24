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

  
const sas = new Discord.MessageEmbed()
 .setTimestamp()

if (!rays) return message.reply('**Lütfen Hatayı Belirtiniz Lütfen Trol Amaçlı Kullanmayınız**')
  
  message.reply('**Hatayı Geliştiricilerime Bildirdim! Hatayı Bildirdiğin İçin Teşekkür Ederiz**')
  const sa = new Discord.MessageEmbed()
  .setTitle('Hata Var!')
  .setTimestamp()
  .setColor("RED")
  .setFooter('Lays Hata Sistemi')
  .addField('Hatayı Bulan  Kişi', `<@${message.author.id}>`,true)
  .addField('Hata', rays,true)
  client.channels.cache.get('742272353899249795').send(sa)
  
}
exports.conf = {
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "hata"
}