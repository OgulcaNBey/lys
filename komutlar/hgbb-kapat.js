const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
    if(db.fetch(`bakımabi`)) return message.channel.send (' Ups.. Görünüşe Göre Küçük Bir Bakım Arasındayız! \n Bu Sırada Bazı Komutlar Çalışmayabilir! \n Bakım Sebebi: **Kod Ekleniyor, Ufak Çaplı Hatalar Düzeltiliyor!** \n Bizi Tercih Ettiğiniz İçin Teşekkür Ederiz!')

  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  let kanal = message.mentions.channels.first();

  if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription('Bu Komut İçin Yetkin Yok!')
    return message.channel.send(izinyok)
  }
  
    
    db.delete(`hgbb_${message.guild.id}`,kanal.id)

   const küfürengelcim21 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Hg-bbyi Kapattım')
    return message.channel.send(küfürengelcim21)
   
  

  
  
  
};
exports.conf = {
 enabled: true,
 guildOnly: false,
  aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'hg-bb-kapat'
};