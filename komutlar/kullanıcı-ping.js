const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
let Embed = new Discord.MessageEmbed()

           message.channel.send(`🏓 Ping Pong....`).then(msg=>{
        const mega = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setDescription(`🏓 Pong!\nGecikme ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms\nAPI Gecikmesi ${Math.round(client.ws.ping)}ms`)
        .setColor('RANDOM')
        msg.edit(mega);
        msg.edit("\....")
        
    })
                                                       }

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'ping'
}