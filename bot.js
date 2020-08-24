const Discord = require('discord.js');//sa marabalar
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const YouTube = require("simple-youtube-api");
const queue = new Map();
const ffmpeg = require("ffmpeg"); //bura
const express = require("express");

const ytdl = require("ytdl-core");
const db = require('quick.db');
const http = require('http');

require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');

const app = express();
app.get("/", (request, response) => {
  console.log(
    ` az önce Ayberk abi projeye giriş yaptı  veya invite kodu verdi :D`
  );
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://$https://sylonbots.glitch.me.glitch.me/`);
}, 120000);
var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};




client.on("guildMemberAdd", async member => {
let rolisim = await db.fetch(`otorolisim_${member.guild.id}`);
let sa = await db.fetch(`rol_${member.guild.id}`) 
let as = await db.fetch(`kanal_${member.guild.id}`)
if(!sa || !as) return
member.roles.add(sa)
client.channels.cache.get(as).send(
new Discord.MessageEmbed()
    .setColor("#00aaff")
  .setDescription(`**Sunucumuza Yeni Katılan **${member}** Adlı Kullanıcıya \`${rolisim}\` Rolünü Başarıyla Verdim**`)
)

});

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



//---------------------------------KOMUTLAR---------------------------------\\
client.on("message", async msg => {
  
  const lus = await db.fetch(`küfürengel_${msg.guild.id}`)
  if (lus) {
    const kufurengel = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak","amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
    if (kufurengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('Hey Dur! Bu Sunucuda Küfürü Engelliyorum').then(msg => msg.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async msg => {
  
  const lus = await db.fetch(`küfürengel_${msg.guild.id}`)
  if (lus) {
    const kufurengel = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak","amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
    if (kufurengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('Hey Dur! Bu Sunucuda Küfürü Engelliyorum').then(msg => msg.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
//reklam
client.on("message", async msg => {
  
  const lus = await db.fetch(`reklamengel_${msg.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
    if (reklamengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('Hey Dur! Bu Sunucuda Reklamı Engelliyorum').then(msg => msg.delete(3000));
          
        }
      } catch(err) {n
        
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async msg => {
  
  const lus = await db.fetch(`reklamengel_${msg.guild.id}`)
  if (lus) {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
    if (reklamengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('Hey Dur! Bu Sunucuda Reklamı Engelliyorum').then(msg => msg.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
//otorol
//ototag
	client.on("guildMemberAdd", async member => {
let frenzy_ibrahim = await db.fetch(`Frenzy?Code?Ototag_${member.guild.id}`) 
let frenzykanal = await db.fetch(`Frenzy?Code?OtotagKanal_${member.guild.id}`)
if(!frenzy_ibrahim || !frenzykanal) return
 
 member.setNickname(`${frenzy_ibrahim} ${member.user.username}`) 
client.channels.get(frenzykanal).send(`${member}'a Başarıyla Tagı Verildi!`)
 
});
//sa-as
client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  }
});
client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'sea') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  }
});
client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'selamün aleyküm') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  }
});
client.on("message", async msg => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
  if (msg.content.toLowerCase() === 'selamun aleykum') {
    msg.reply('Aleyküm Selam Hoşgeldin');
  }
  }
});
//hgbb
client.on('guildMemberAdd', async member => {
  let lukanal = await db.fetch(`hgbb_${member.guild.id}`)
  let luchannel = client.channels.cache.get(lukanal)
  if(!luchannel) return
luchannel.send( 
new Discord.MessageEmbed()
  .setColor("#00ff00")
.setDescription(`Yolları Açın!  Karşınızda ${member} Sunucuya Katıldı!`)
)
})
client.on('guildMemberRemove', async member => {
  let lukanal = await db.fetch(`hgbb_${member.guild.id}`)
  let luchannel = client.channels.cache.get(lukanal)
  if(!luchannel) return
  luchannel.send( 
new Discord.MessageEmbed()
    .setColor("#ff0000")
.setDescription(`Kendine İyi Bak Dostum. Seni Özlüyecez! ${member.user.username}`)
)
})

//MOD-LOG


client.on('guildBanAdd', async member  => {
    let kanal = await db.fetch(`modlog_${member.guild.id}`)
  let kanal2 = client.channels.cache.get(kanal)
  if (!kanal2) return
  kanal2.send(
     new Discord.MessageEmbed()
    .setTitle('Bir Üye Yasaklandı!')
    .setDescription(`<@${member.user.id}> adlı kullanıcıyı yasakladı!`)
  )
  
})
client.on('messageDelete', async message   => {
    let kanal = await db.fetch(`modlog_${message.guild.id}`,)
  let kanal2 = client.channels.cache.get(kanal)
  if (!kanal2) return
  kanal2.send(
     new Discord.MessageEmbed()
    .setTitle('Mesaj Silindi')
    .setDescription(`${message.author.tag}a ait  <#${message.channel.id}> adlı kanalda bir mesaj silindi! \n Silinen Mesaj ${message.content}`)
  )
  
})
client.on('channelDelete', async channel  => {
    let kanal = await db.fetch(`modlog_${channel.guild.id}`,)
  let kanal2 = client.channels.cache.get(kanal)
  if (!kanal2) return;
 kanal2.send (
 new Discord.MessageEmbed()
   .setTitle('Kanal Silindi!')
   .setDescription(`${channel.name} adlı kanal silindi`)
 )
})
client.on('channelCreate', async channel  => {
    let kanal = await db.fetch(`modlog_${channel.guild.id}`,)
  let kanal2 = client.channels.cache.get(kanal)
  if (!kanal2) return;
 kanal2.send (
 new Discord.MessageEmbed()
   .setTitle('Kanal Oluşturuldu!')
   .setDescription(`${channel.name} adlı kanal oluşturuldu!`)
 )
})
//sayac
client.on("guildMemberAdd", async member => {
  let frenzysayı = await db.fetch(`sayaçsayı_${member.guild.id}`);
  let frenzykanal = await db.fetch(`kanal2_${member.guild.id}`);
  if (!frenzysayı || !frenzykanal) return;
  let sonuç = frenzysayı - member.guild.memberCount;
  client.channels.cache
  .get(frenzykanal)
    
    .send(
new Discord.MessageEmbed()
    .setColor("#009aff")
      .setDescription(`${member}, Hoşgeldin  **${frenzysayı}** Kişi Olmamıza **${sonuç}** Kişi Kaldı **${member.guild.memberCount}** Kişiyiz`)
    )
  return;
});
client.on("guildMemberRemove", async member => {
  let frenzysayı = await db.fetch(`sayaçsayı_${member.guild.id}`);
  let frenzykanal = await db.fetch(`kanal2_${member.guild.id}`);
  if (!frenzysayı || !frenzykanal) return;
  let sonuç = frenzysayı - member.guild.memberCount;

  client.channels.cache
 
    .get(frenzykanal)
    .send(
    new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setDescription(` ${member}, Sunucudan Ayrıldı! **${frenzysayı}** Kişi Olmamıza  **${sonuç}** Kişi Kaldı **${member.guild.memberCount}** Kişiyiz `)
)
  return;
});
//durum
client.on("message", async msg => {
  
  const lus = await db.fetch(`ever_${msg.guild.id}`)
  if (lus) {
    const kufurengel = ["@everyone","@here"];
    if (kufurengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('**Everyone Yada Here Atmana Maalesef İzin Veremem!**').then(msg => msg.delete(3000));
         
        }
      } catch(err) {
        console.log(err);
    }
  }
}
if (!lus) return;
});
client.on("messageUpdate", async msg => {
  
  const lus = await db.fetch(`ever_${msg.guild.id}`)
  if (lus) {
    const kufurengel = ["@everyone","@here"];
    if (kufurengel.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.permissions.has('KICK_MEMBERS')) {
          msg.delete();
          
          return msg.reply('Ben Akıllı Bir Botum Dostum!').then(msg => msg.delete(3000));
          
        }
      } catch(err) {
        console.log(err);
    }
  }
}
})
//sunucu
client.on("guildCreate", guild => {
let girischannel = guild.channels.cache.random()
girischannel.send(
 new Discord.MessageEmbed()
   .setTitle('Merhaba!')
  .setColor("f7ff00")
  .setDescription('Merhaba Ben Lays \n Komutlarımı lyyardım yazarak görebilirsin! \n Prefixim ly \n Beni Eklediğin İçin Teşekkür Ederim ')
  .addField('Önemli Linkler', `Beni Davet Etmek İçin [Buraya Tıkla](https://discord.com/oauth2/authorize?client_id=730709113713197066&scope=bot&permissions=8)\n Destek Sunucuma Gitmek İçin [Buraya Tıkla](https://discord.gg/Sckj4tY)`)
)
})
//reklam-kick
client.on("message", async message => {
  let ever = await db.fetch(`reklamkick_${message.guild.id}`);
  let sayı = await db.fetch(`sayi_${message.author.id}`);
  let api = message.author
  if (ever === "acik") {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https://", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
        if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {

      if (message.member.hasPermission("ADMINISTRATOR")) return;
      db.add(`sayi_${message.author.id}`, 1);
      if (sayı == null) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            "1.Uyarı Lütfen Tekrarlama Yoksa Atılacaksın\n(1/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı === 1) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            "2.Uyarı Lütfen Tekrarlama Yoksa Atılacaksın\n(2/3)"
          )      
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı > 2) {
        message.delete();
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("Reklamdan Dolayı Kicklendi")
        message.channel.send(embed);
        db.delete(`sayi_${message.author.id}`);
   message.guild.member(api).kick();   
        return;
      }
    }
  } else {
    return;
  }
});
client.on("messageUpdate", async message => {
  let ever = await db.fetch(`reklamkick_${message.guild.id}`);
  let sayı = await db.fetch(`sayi_${message.author.id}`);
  let api = message.author
  if (ever === "acik") {
    const reklamengel = ["discord.app", "discord.gg", ".party", ".com", ".az", ".net", ".io", ".gg", ".me", "https://", "http", ".com.tr", ".org", ".tr", ".gl", "glicht.me/", ".rf.gd", ".biz", "www.", "www"];
        if (reklamengel.some(word => message.content.toLowerCase().includes(word))) {

      if (message.member.hasPermission("ADMINISTRATOR")) return;
      db.add(`sayi_${message.author.id}`, 1);
      if (sayı == null) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            "1.Uyarı Lütfen Tekrarlama Yoksa Atılacaksın\n(1/3)"
          )
          .setFooter(client.user.username, client.user.avatarURL);
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı === 1) {
        const embed = new Discord.MessageEmbed()
          .setDescription(
            "2.Uyarı Lütfen Tekrarlama Yoksa Atılacaksın\n(2/3)"
          )      
        message.channel.send(embed);
        message.delete();
        return;
      }
      if (sayı > 2) {
        message.delete();
        const embed = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription("Reklamdan Dolayı Kicklendi")
        message.channel.send(embed);
        db.delete(`sayi_${message.author.id}`);
   message.guild.member(api).kick();   
        return;
      }
    }
  } else {
    return;
  }
});
//anti raid
client.on("guildMemberAdd", async member => {
  let anti = await db.fetch(`antiraid_${member.guild.id}`)
  if (anti === "acik") {
  if (!member.user.bot) return;
  await member.guild.members.ban(member.guild.member(member));
  }
});
//eklendim-atildim
	

client.on("guildCreate", async function(guild) {

	

  const owner = client.users.cache.get(guild.ownerID)
  
    
  
  const BotSahibi = ayarlar.sahip
  
    
  
  const embed = new Discord.MessageEmbed()
  
    
  
  .setTitle(`Yeni bir sunucuya eklendim`)
  
    
  
  .setColor("#ff0000")
  
    
  
    
  
  .addField(`Sunucu Adı`, guild.name)
  
    
  
  .addField(`Sunucu Sahibi`, owner.username + "#" +owner.discriminator)
  
    
  
  .addField(`Sunucu Üye Sayısı`, guild.memberCount)
  
    
  
    
  
  client.users.cache.get(BotSahibi).send({embed: embed}).catch(err => console.log("Bot sahibine mesaj atamıyorum!"))
  
    
  
  })
  
  //AFK	

client.on("message" , async msg => {

	

  

	

  if(!msg.guild) return;

	

  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 

	

  

	

  let afk = msg.mentions.users.first()

	

  

	

  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)

	

  

	

  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)

	

 if(afk){

	

   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)

	

   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)

	

   if(msg.content.includes(kisi3)){

	

	

       msg.reply(`Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`)

	

   }

	

 }

	

  if(msg.author.id === kisi){

	

	

       msg.reply(`Afk'lıktan Çıktınız`)

	

   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)

	

   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)

	

   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)

	

    msg.member.setNickname(isim)

	

    

	

  }

	

  

	

});

	

	


  
    
  
    
  
  client.on("guildDelete", async function(guild) {
  
    
  
  const owner = client.users.cache.get(guild.ownerID)
  
    
  
  const BotSahibi = ayarlar.sahip
  
    
  
  const embed = new Discord.MessageEmbed()
  
    
  
  .setTitle(`Bir sunucudan atıldım`)
  
    
  
  .setColor("#ff0000")
  
    
  
  .addField(`Sunucu Adı`, guild.name)
  
    
  
  .addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)
  
    
  
  .addField(`Sunucu Üye Sayısı`, guild.memberCount)
  
    
  
    
  
  client.users.cache.get(BotSahibi).send({embed: embed}).catch(err => console.log("Bot sahibine mesaj atamıyorum!"))
  
    
  
  })
//snipe
client.on('messageDelete', message => {
  const emirhan = require("quick.db")
  emirhan.set(`snipe.mesaj.${message.guild.id}`, message.content)
  emirhan.set(`snipe.id.${message.guild.id}`, message.author.id)

})
//oto tag


client.on('guildMemberAdd', async member => {
  
  let emran = await db.fetch(`ototag.${member.guild.id}`);
  let tanersins;
  if (emran == null) tanersins = member.setNickname(`${member.user.username}`)
  else tanersins = member.setNickname(`${emran} ${member.user.username}`)
});

//Botu sesli kanalda tutma


client.on("ready", () => {
  client.channels.cache.get("747335944465809428").join()
  })
  
  

