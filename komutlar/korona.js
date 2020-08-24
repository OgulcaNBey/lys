const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args) => {
  if(!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setTitle('Ülke Kodu Girmedin!')
    .setDescription('Mevcut Ülke Kodları : \n Türkiye : **TR** \n Azerbaycan : **AZ** \n Çin : **CN** \n Amerika : **US**')
    return message.channel.send(sa)
  }
  let a = args[0].toLowerCase()
  .replace('türkiye', 'TR')
  .replace('çin', 'CN')
  .replace('amerika', 'US')
  .replace('azerbaycan', 'AZ')
  
  
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body; //selamun he llp dd marhaba apiğ marraba! wow güzel sistem
  let ülk = body.countrydata[0].info.title

  const kuruna = new Discord.MessageEmbed()
  .addField('Toplam Bilgilendirme', `

\`Toplam Vaka:\` **${body.countrydata[0].total_cases}**
\`Toplam İyileşen:\` **${body.countrydata[0].total_recovered}**
\`Toplam Kayıp :\` **${body.countrydata[0].total_deaths}**
\`Toplam Enfetke:\` **${body.countrydata[0].total_active_cases}**
`)
  .addField('Bugünkü Vakalar', `
\`Bugünkü Vaka:\` **${body.countrydata[0].total_new_cases_today}**
\`Bugünkü Kayıp:\` **${body.countrydata[0].total_new_deaths_today}**

`)
return message.channel.send(kuruna)
};
exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};
exports.help = {
  name: 'korona'
};
