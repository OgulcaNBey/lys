const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
if(db.fetch(`bakımabi`)) return message.channel.send (' Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim** ')

let raysapi = message.mentions.members.first()
let sebep = args.slice(1).join(' ')

if (!raysapi) {
  const s = new Discord.MessageEmbed()
  .setDescription('Kimi Banlayacağını Yazmalısın!')
  return message.channel.send(s)
}
    if (!message.guild.member(raysapi).bannable) {
    const s = new Discord.MessageEmbed()
  .setDescription('Bu Kişide Yetki Var Yetkilileri Banlayamam')
  return message.channel.send(s)
    }//message.guild.member(user).kick()

  if(raysapi.id === client.user.id) {
     const s = new Discord.MessageEmbed()
  .setDescription('Beni Kendi Komutumla Banlayamazssın.')
  return message.channel.send(s)
  }
   if(raysapi.id === message.author.id) {
      const s = new Discord.MessageEmbed()
  .setDescription('Dostum Kendini Banlayamazssın!')
  return message.channel.send(s)
   }
  
  if(!sebep) {
  const s = new Discord.MessageEmbed()
  .setDescription('Bir Sebep Belirtmelisin!')
  return message.channel.send(s)
  }

  
  message.guild.members.ban(raysapi, { reason: sebep + ` | Yetkili: ${message.author.tag} - ${message.author.id}` })
 const s = new Discord.MessageEmbed()
  .setDescription(`${raysapi} adlı kişi başaryla ${sebep} sebebinden dolayı ${message.auhtor.tag} tarafından sunucudan yasaklandı!`)
  return message.channel.send(s)
}
exports.conf = {
  aliases: [],
  permLevel: 3
}
exports.help = {
  name: "ban"
}
