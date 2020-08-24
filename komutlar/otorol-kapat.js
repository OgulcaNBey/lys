const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
  if(db.fetch(`bakim`)) return message.channel.send('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n <a:__Bakımdan Sonra Çalışmayan Komutlar Olursa s!hata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')
  
if (!message.member.permission.has("MANAGE_ROLES")) {
    const nope = new Discord.MessageEmbed()
    .setTitle('Yetkin Yok!')
    .setDescription('Bu Komut İçin `Rolleri Yönet` Yetkisine Sahip Olmalısın')
    .setColor("RED")
    return message.channel.send(nope) 
  }
  
  let rol = message.mentions.roles.first()
  let kanal = message.mentions.channels.first()
  
   
    let rolisim = message.mentions.roles.first().name  

   db.delete(`otorolisim_${message.guild.id}`, rolisim)
db.delete(`rol_${message.guild.id}`,) 
db.delete(`kanal_${message.guild.id}`,)
   const y = new Discord.MessageEmbed()
   .setTitle('Otorol Kapatıldı!')
   .setDescription(`Otorolü Kapattım!`)
   return message.channel.send(y)
 
 };  
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'otorol-kapat'
};
 
