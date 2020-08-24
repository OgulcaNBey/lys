const Discord = require('discord.js'),
 db = require('quick.db')

exports.run = async(client, message, args) =>{
    if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

  let sayaçsayı = await db.fetch(`sayaçsayı_${message.guild.id}`)
  let kanal2 = await db.fetch(`kanal2_${message.guild.id}`)

  db.delete(`sayacsayı_${message.guild.id}`)
  db.delete(`kanal2_${message.guild.id}`)
   const a = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Sayaç Sistemini Kapattım!')
   .setColor("RED")
    return message.channel.send(a)
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayac-kapat'],
  permLevel: 0
}
exports.help = {
  name: "sayaç-kapat"
}