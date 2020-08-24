const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kanal = message.mentions.channels.first();

  if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
  }
 
  if (!kanal) {
    const hgbb = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`Kanal Belitmen Lazım`)
      return message.channel.send(hgbb)
  }
    db.set(`hgbb_${message.guild.id}`,kanal.id)
    let lu = await db.fetch(`hgbb_${message.guild.id}`,kanal.id)
    
    const küfürengelcim6 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription(`Mesaj Kanalı ${kanal} Olarak Ayarlandı`)
    .setColor("RED")
    return message.channel.send(küfürengelcim6)

  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: ['hg-bb'],
 permLevel: 0
};

exports.help = {
 name: 'hgbb'
};