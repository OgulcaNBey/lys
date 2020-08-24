const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  if(db.fetch(`bakımabi`)) return message.channel.send (' Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n <a:loading:730836569358860301>En Yakın Zamanda Tekrardan Hizmetinizdeyim')

let raysapi = message.mentions.users.first()
let sebep = args.slice(1).join(' ')

if (!raysapi) {
  const s = new Discord.MessageEmbed()
  .setDescription('Kimi Kickleyeceğini Yazmalısın!')
  return message.channel.send(s)
}

  if(raysapi.id === client.user.id) {
     const s = new Discord.MessageEmbed()
  .setDescription('Beni Kendi Komutumla Kickleyemezssin')
  return message.channel.send(s)
  }
   if(raysapi.id === message.author.id) {
      const s = new Discord.MessageEmbed()
  .setDescription('Dostum Kendini Kickleyemezssin!')
  return message.channel.send(s)
   }
  
  if(!sebep) {
  const s = new Discord.MessageEmbed()
  .setDescription('Bir Sebep Belirtmelisin!')
  return message.channel.send(s)
  }

  message.guild.member(raysapi).kick();
 const s = new Discord.MessageEmbed()
  .setDescription(`${raysapi} adlı kişi başaryla ${sebep} sebebinden dolayı ${message.auhtor.tag} tarafından sunucudan kicklendi!`)
  return message.channel.send(s)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}
exports.help = {
  name: "kick"
}
