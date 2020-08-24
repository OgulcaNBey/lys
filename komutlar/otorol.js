const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) return message.channel.send('**Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')
  
  let rol = message.mentions.roles.first()
  let kanal = message.mentions.channels.first()
  
  if (!kanal) {
    const s = new Discord.MessageEmbed()
    .setTitle('Hatalı Kullanım!')
    .setDescription('Kanal Belirtmeyi Unuttun!')
    return message.channel.send(s)
  }
  if (!rol) {
    const s2 = new Discord.MessageEmbed()
    .setTitle('Hatalı Kullanım!')
    .setDescription('Rol Belirtmeyi Unuttun!')
    return message.channel.send(s2)
  }
   let rolisim = message.mentions.roles.first().name  
  db.set(`otorolisim_${message.guild.id}`,rolisim)
db.set(`rol_${message.guild.id}`,rol.id) 
db.set(`kanal_${message.guild.id}`,kanal.id)
  
   const y = new Discord.MessageEmbed()
   .setTitle('Otorol Ayarlandı!')
   .setDescription(`Otorol Başarıyla Ayarlandı! \n Kanal: ${kanal} \n Rol: ${rol} olarak ayarlandı`)
   .setFooter('Dikkat Rolümün En Üstte Olması Gerek Yoksa Çalışmaz!!!')
   return message.channel.send(y)

 } 
exports.conf = { 
  aliases: ['otorolayarla'],
  permLevel: 2
}
exports.help = {
  name: 'otorol'
}
 
