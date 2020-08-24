const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

  let e = (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||  ayarlar.prefix;
const embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription("** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**")
if(db.fetch(`bakim`)) return message.channel.send(embed)
  const y = new Discord.MessageEmbed()
  .setDescription('Hata Bulduysanız **lyhata** Komutunu Kullanmayı Unutmayın!','Önerinizmi Var? **s!öneri** Komutunu Kullanın',true)
  .addField('Bot', 'lyhata \n lyöneri \n lyping  \n lyistatistik `',true)
  .addField('Kullanıcı', '`lydavet \n lysay \n lyavatar \n lyafk',true)
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setColor("ff7c00")
  .setThumbnail(client.user.displayAvatarURL())
  return message.channel.send(y);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k"],
  permLevel: 0
};
exports.help = {
  name: "kullanıcı"
};
