const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('ms')
 exports.run = (client, message, args) => {
     if(db.fetch(`bakımabi`)) return message.channel.send ('** Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim**')

   let oylama =  args.join(' ');
  if (!oylama) return message.reply('Oylama Sorusu Belirt')
   
   
 
  const sa = new Discord.MessageEmbed()
  .setDescription(`${oylama}`)
  .setFooter(`${message.author.tag} Tarafından`)
  return message.channel.send(sa).then(function(message) {

         message.react('✅');

         message.react('❌');

  });

 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
      aliases: ['oylama'],
  permLevel: 2
};

exports.help = {
  name: 'oylama'
};
     
 