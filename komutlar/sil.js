const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

      let silmek = args[0]

  if (!silmek) return message.reply(':warning: Bir Değer Belirtmelisin! :warning:')
  if (isNaN(silmek)) return message.repy('Silme Değeri Sadece Rakamlardan Oluşabilir')
  
  if (silmek < 0) return message.reply('0 dan Küçük Değer Belirtemezssin')
    if (silmek < 1) return message.reply('1 dan Küçük Değer Belirtemezssin')
      if (silmek < 2) return message.reply('2 den Küçük Değer Belirtemezssin')

  if(silmek > 100) return message.reply('100 den büyük bir değer belirtemezssin')
  
  
  message.channel.bulkDelete(silmek).then(() =>  {
 message.channel.send(`🚀 ${silmek} kadar roket başarıyla uzaya fırlatıldı`)
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'sil'
};