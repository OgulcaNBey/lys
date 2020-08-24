const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')
exports.run = async(client, message, args) => {
  if(db.fetch(`bakımabi`)) return message.channel.send ('**<a:tac:730709347386130522> Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n <a:tac:730709347386130522> __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

  let raysapi = args[0]

if (!raysapi) {
  const s = new Discord.MessageEmbed()
  .setDescription('Bir İd Belirtiniz')
  return message.channel.send(s)
}
    

  
message.guild.members.unban(raysapi);
 const s = new Discord.MessageEmbed()
  .setDescription(`${raysapi} idli kişi ${message.author.tag} tarafından yasağı kaldırıldı`)
  return message.channel.send(s)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
}
exports.help = {
  name: "unban"
}
