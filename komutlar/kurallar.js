const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send(`:x: Bu kullanmak için kurucu olmalısın.`)

 message.delete();
      message.channel.createInvite({maxAge: 0}).then((invite) => {
  const sa = new Discord.MessageEmbed()
  .setTitle(`${message.guild.name} Kurallar!`)
  .setDescription(`1) Küfür Ve Argo Yasak! \n\n 2) Cinsel Herhangi Bir Şey Konuşmak/Paylaşmak Yasak! \n\n 3)Siyaset,Irk,Din,Mehzep Hakkında Konuşmak Yasak \n\n 4) Kavga Açmak Yada Kavgaya Katılmak Yasak! \n\n 5)İnsanları Aşşalayacağı Sözler Yasak \n\n\n **Dipnot** Herkes Kuralları Okumuş Sayılır`)
  .addField('Sınırsız Davet Linkimiz', invite)
  .setColor("GREEN")
  .setThumbnail(message.guild.iconURL)
  return message.channel.send(sa)
  
})
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'text-kurallar'
};