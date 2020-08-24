const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
    if(db.fetch(`bakim`)) return message.channel.send('**Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

  let e = (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||  ayarlar.prefix;

  const y = new Discord.MessageEmbed()
  .setDescription('Hata Bulduysanız **lyhata** Komutunu Kullanmayı Unutmayın!','Önerinizmi Var? **lyöneri** Komutunu Kullanın',true)
   .addField('Engeller', '` lyever-engel \n lyreklam-engel \n lyküfür-engel \n lyreklam-kick \n`',true)
   .addField('Karşılama', '`lyhgbb \n lyhg-bb-kapat \n lyotorol \n lyotorol-kapat \n lysayaç \n lysayaç-kapat`',true) //
   .addField('Mod Menüsü', '` \n lyban \n lyunban \n lykick`',true) //
   .addField('Yetkili Komutları', '`lysil \n lyoylama`',true)

  
   
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setColor("ff7c00")
  .setThumbnail(client.user.displayAvatarURL())
  return message.channel.send(y);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["m"],
  permLevel: 0
};
exports.help = {
  name: "moderasyon"
};
