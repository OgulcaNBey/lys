const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');


exports.run = async(client, message, args) => {
    if(db.fetch(`bakımabi`)) return message.channel.send (' Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

  let modlogayarla = db.get(`modlog_${message.guild.id}`)
  
  
  message.channel.send('Modlog Kapatılıyor...').then(x => {
    x.edit('%1')
        x.edit('%10')
    x.edit('%15')
    x.edit('%35')
    x.edit('%50')
    x.edit('%57')
    x.edit('%68')
    x.edit('%89')

        x.edit('%100 Tamamlandı!')

    db.delete(`modlog_${message.guild.id}`)
x.edit(
   new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('Modlogu Kapattım')
  
   )
  })


};
exports.conf = {
  enabled: true,  
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'modlog-kapat'
}; 