const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
   const Bakım = new Discord.MessageEmbed()
 .setTitle(' Upss Upss')
 .setColor("0083ff")
  .setDescription("| Bakımda Olduğum İçin Komut Kullanılması Yasaklandı \n <a:ayar:738297650230722660> | Bakım Sebebi: Hatalar Düzeltiliyor  \n <a:tac:730709347386130522> | Lays Bot Kurucular Tarafından Bakıma Alında")
.setFooter(`Bakım İçin Üzgünüz`)
if(db.fetch(`bakımabi`)) return message.channel.send(Bakım)
   
   var espriler = ['Hata Bulduysanız **lyhata** Komutunu Kullanmayı Unutmayın!','Önerinizmi Var? **lyöneri** Komutunu Kullanın'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
  let e = (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||  ayarlar.prefix;

  const y = new Discord.MessageEmbed()
  .setDescription(`${espri}`)
   .addField(' <a:ayar:738297650230722660> Moderasyon Menüsü', '`lymoderasyon`',true) //
   .addField('<a:tac:730709347386130522> Kullanıcı Menüsü', '`lykullanıcı`',true)//
  .addField('<a:tac:730709347386130522> Yenilikler Menüsü', '`lyyenilikler`',true) 
  .addField('Linkler', '[Beni Davet Et](https://discord.com/oauth2/authorize?client_id=730709113713197066&scope=bot&permissions=8) | [Destek Sunucum](https://discord.gg/Sckj4tY) | [Oy Verirmisin](https://top.gg/bot/730709113713197066)')
  .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
  .setColor("f7ff00")

  return message.channel.send(y);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y"],
  permLevel: 0
};
exports.help = {
  name: "yardım"
};
