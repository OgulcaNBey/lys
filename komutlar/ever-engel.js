const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (db.fetch(`bakımabi`))
    return message.channel.send(
      "**Görünüşe Göre Bakımdayız! Anlayışınız İçin Teşekkür Ederiz! \n  __Bakımdan Sonra Çalışmayan Komutlar Olursa lyhata Komutu İle Bildirebilirsin__ \n  En Yakın Zamanda Tekrardan Hizmetinizdeyim** "
    );

  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;

  if (!message.member.permissions.has("KICK_MEMBERS"))
    return message.channel.send(
      `**Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`
    );
  if (!args[0]) {
    const küfürcu0k = new Discord.MessageEmbed()
      .setTitle("Başarısız")
      .setDescription(`Bunumu Arıyorsun? \n ${prefix}ever-engel aç/kapat`);
    return message.channel.send(küfürcu0k);
  }
  if (args[0] == "aç") {
    db.set(`ever_${message.guild.id}`, "açık");
    let lus = await db.fetch(`reklamengel_${message.guild.id}`);

    const reklamengelcim = new Discord.MessageEmbed()
      .setTitle("Başarılı")
      .setDescription("**Ever Engeli Açtım**");
    return message.channel.send(reklamengelcim);
  }

  if (args[0] == "kapat") {
    db.delete(`ever_${message.guild.id}`);

    const küfürengelcim22 = new Discord.MessageEmbed()
      .setTitle("Başarılı")
      .setDescription("**Ever Engeli Kapattım**");
    return message.channel.send(küfürengelcim22);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ever-engel"
};
