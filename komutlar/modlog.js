const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = async(client, message, args) => {
    if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

  
  
let p = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
if (!message.member.permissions.has('KICK_MEMBERS')) {
    const izinyok = new Discord.MessageEmbed()
    .setDescription('Bu Komut İçin Yetkin Yok!')
    .setColor("RED")
    return message.channel.send(izinyok)
}

    let kanal = message.mentions.channels.first();
    if(!kanal) {
      const bulunamadi = new Discord.MessageEmbed()
      .setDescription(`Kanal Belirtmedin!`)
      .setColor("RED")
      return message.channel.send(bulunamadi)
      }
     
    db.set(`modlog_${message.guild.id}`, kanal.id)
    const küfürengelcim = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`Modlog Başarılı Bir Şekilde ${kanal} Olarak Ayarlandı `)
    return message.channel.send(küfürengelcim)


};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'mod-log'
}; 