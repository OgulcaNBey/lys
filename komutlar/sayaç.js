const Discord = require('discord.js'),
 db = require('quick.db')

exports.run = async (client, message, args) => {
    if(db.fetch(`bakımabi`)) return message.channel.send ('**Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

   let sayaçsayı = args[1]
   let kanal2 = message.mentions.channels.first()
   

  
   if(!kanal2) {
    const a = new Discord.MessageEmbed()
    .setTitle('Hata!')
    .setDescription('Kanal Belirtmen Lazım!')
    return message.channel.send(a)
   }
  if(!sayaçsayı) {
     const a = new Discord.MessageEmbed()
    .setTitle('Hata!')
    .setDescription('Bir Sayaç Hedefi Belirtiniz!')
    return message.channel.send(a)
  }
  if (isNaN(sayaçsayı)) {
     const a = new Discord.MessageEmbed()
    .setTitle('Hata!')
    .setDescription('Sayaç Hedefi Sadece Sayıdan Oluşabilir!')
    return message.channel.send(a)
  }
  
  await db.set(`sayaçsayı_${message.guild.id}`,sayaçsayı)
    await db.set(`kanal2_${message.guild.id}`,kanal2.id)
     const a = new Discord.MessageEmbed()
    .setTitle('Başarılı!')
    .setDescription(`Sayaç Ayarlandı! \n Kanal : ${kanal2} \n Sayaç Hedefi: ${sayaçsayı} Olarak Ayarlandı`)
     .setColor("RED")
  return message.channel.send(a)
  

  
  
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sayaç'],
  permLevel: 2
}
exports.help = {
  name: "sayaç"
}