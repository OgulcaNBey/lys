const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
  
if(message.author.id != "418081929980674070") return
if (!args[0]) {
  const s = new Discord.MessageEmbed()
  .setTitle('Bakım Modu!')
  .setDescription('Botu Bakıma Almak İçin lybakım aç/kapat')
 return message.channel.send(s)
}
   if (args [0] === 'aç') {
                  db.set(`bakımabi`,'acik')

  const s = new Discord.MessageEmbed()
  .setTitle('Bakım Modu!')
  .setDescription('Bakım Modu Açıldı!')
 return message.channel.send(s)


   }
  if (args[0] === 'kapat') {
            db.delete(`bakımabi`)

      const s = new Discord.MessageEmbed()
  .setTitle('Bakım Modu!')
  .setDescription('Bakım Modu Kapatıldı!')
 return message.channel.send(s)
        db.delete(`bakımabi`)

  }
  
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [`bakim`],
permLevel: 4
};

exports.help = {
name: 'bakım'
};