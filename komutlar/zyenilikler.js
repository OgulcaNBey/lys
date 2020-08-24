const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');




exports.run = (client, message, args) => {
    const Bakım = new Discord.MessageEmbed()
 .setTitle(' Upss Upss')
 .setColor("0083ff")
  .setDescription(" | Bakımda Olduğum İçin Komut Kullanılması Yasaklandı \n <a:ayar:738297650230722660> | Bakım Sebebi: Hatalar Düzeltiliyor  \n <a:tac:730709347386130522> | Lays Bot Kurucular Tarafından Bakıma Alında")
.setFooter(`Bakım İçin Üzgünüz`)
if(db.fetch(`bakımabi`)) return message.channel.send(Bakım)
    const embed = new Discord.MessageEmbed()
        
        .setTitle(`   Yenilikler `)
        .setDescription(` V12 Ye Geçiş Yapıldı! \n  Bazı Kod Düzeltmeleri.  \n  Bazı Kodlar Kaldırıldı! \n  Bazı Kodlar Eklendi \n\n\n  Yeni Kodlar Kodlanıyor!!`)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(`${message.author.username} Yeniliklere Göz Atmak İstedi! `, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.send(embed)
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenilikler"],
  permLevel: 0,
};

exports.help = {
  name: 'yenilikler',
  description: '',
  usage: 'yenilikler'
};