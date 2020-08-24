const Discord = require('discord.js');
const db = require('quick.db')
 exports.run = (client, message) => {
  if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')


const s = new Discord.MessageEmbed()
.setColor("#66CC")
.setDescription(` **${message.guild.name}** sunucusunda **${message.guild.memberCount}** kişi var  `)
 return message.channel.send(s)  
 };

 exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "say"
};
     
 