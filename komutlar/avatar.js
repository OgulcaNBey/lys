const Discord = require('discord.js');
const db = require ('quick.db');

exports.run = (client, apiğ, args) => {
    
    var espriler = ['Güzel Bir Avatara Benziyor','Bu Avatarı Sevdim','Profil Foton Güzelmiş!','WOW'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
    let user;
    
    if (apiğ.mentions.users.first()) {
      user = apiğ.mentions.users.first();
    } else {
        user = apiğ.author;
    }
    
    const avatar = new Discord.MessageEmbed()
    .setTitle(`${espri}`)
        .setColor("RANDOM")
        .setImage(user.avatarURL())
    apiğ.channel.send(avatar)
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'avatar'
};