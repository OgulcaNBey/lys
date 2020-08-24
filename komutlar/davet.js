const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require('quick.db')
exports.run = (client, message, args) => {
if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim** ')

    const embed = new Discord.MessageEmbed()
        
        .setAuthor(`${client.user.username}`, client.user.displayAvatarURL())
    .setThumbnail(client.user.displayAvatarURL())
    .setColor("GREEN")
    .setFooter(`${client.user.username}`)
         .setDescription('[Beni Davet Et](https://discord.com/oauth2/authorize?client_id=730709113713197066&scope=bot&permissions=8) \n [Destek Sunucuma Katıl](https://discord.gg/Sckj4tY) \n [Oy Verirmisin](https://top.gg/bot/730709113713197066)')
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};