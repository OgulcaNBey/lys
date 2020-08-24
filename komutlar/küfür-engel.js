const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  

  if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
  }
  if (!args[0])  {
    const küfürcuk = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Bunumu Arıyorsun? \n ${prefix}küfür-engel aç/kapat`)
      return message.channel.send(küfürcuk)

  }
  if (args [0] == 'aç') {
    db.set(`küfürengel_${message.guild.id}`, 'açık')
    let lu = await db.fetch(`küfürengel_${message.guild.id}`)
    
    const küfürengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Küfür Engeli Açtım')
    return message.channel.send(küfürengelcim)

  }
  
  if (args [0] == 'kapat') {
    
    db.delete(`küfürengel_${message.guild.id}`)

   const küfürengelcim2 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Küfür Engeli Kapattım')
    return message.channel.send(küfürengelcim2)
   
  }

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['küfür-engel'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-engelle'
};