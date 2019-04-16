const Discord = require('discord.js')///////////////////////////////
const bot = new Discord.Client()////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
bot.on('ready', function () {///////////////////////////////////////
  console.log("Je suis prêt a être utiliser^^ , C'est Partit !")////
})//////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

//
//
//Debut De Toute Les Commande Debut De Toute Les Commande
//Debut De Toute Les Commande Debut De Toute Les Commande
//
//
bot.on ('message', message => {
  var prefix = '.'
//
//Une Seul Commande Une Seul Commande Une Seul Commande Une Seul Commande 
//
if(message.content.startsWith(`${prefix}help`)) {

  message.reply('***Regarde Tes Massage Pv***')
  message.member.send('<a:Loading:566345305302237205>__**Voici La Liste Des Commande :**__<a:Loading:566345305302237205>\n\n<a:rfleche:566039048129478657>**Le ".Trashboy"** = `Insulte Trashboy`\n\n<a:rfleche:566039048129478657>**Le ".Pokemon"** = `Envoie un Pokemon En Priver` \n\n<a:rfleche:566039048129478657>**Le Bot Fait Aussi** = `Anti Insulte` , `Anti Lien (Tenor Ok)`')
}
//
//Une Seul Commande Une Seul Commande Une Seul Commande Une Seul Commande 
//
if(message.content.startsWith(`${prefix}Pokemon`)) {

  message.member.send('https://tenor.com/view/pokemon-pikachu-nintendo-anime-eevee-gif-5618288')
  message.reply('***Pokemon Reçu en priver***')
}

if(message.content.startsWith(`${prefix}Trashboy`)) {
  message.reply('**Trashboy aime sucer**')
}
//
//
//Lien .com ou .fr Lien .com ou .fr Lien .com ou .fr Lien .com ou .fr
//Lien .com ou .fr Lien .com ou .fr Lien .com ou .fr Lien .com ou .fr
//
//
if(message.content.endsWith('.com')) {
  message.delete('')
  message.reply("`N'envoie pas de lien ici !`")
}
if(message.content.endsWith('.fr')) {
  message.delete('')
  message.reply("`N'envoie pas de lien ici !`")
}
//
//
//Insulte Insulte Insulte Insulte Insulte Insulte Insulte Insulte Insulte Insulte
//Insulte Insulte Insulte Insulte Insulte Insulte Insulte Insulte Insulte Insulte
//
//
if(message.content.includes(`fdp`)) {
  message.delete('')
  message.channel.send("`Pas d'insulte !`")
}
if(message.content.includes(`con`)) {
  message.delete('')
  message.channel.send("`Pas d'insulte !`")
}
if(message.content.includes(`ntm`)) {
  message.delete('')
  message.channel.send("`Pas d'insulte !`")
}
if(message.content.includes(`batard`)) {
  message.delete('')
  message.channel.send("`Pas d'insulte !`")
}
if(message.content.includes(`connard`)) {
  message.delete('')
  message.channel.send("`Pas d'insulte !`")
}
if(message.content.includes(`pute`)) {
  message.delete('')
  message.channel.send("`Pas d'insulte !`")
}
})
//
//
//Bot User Bot User Bot User Bot User Bot User Bot User Bot User Bot User 
//Bot User Bot User Bot User Bot User Bot User Bot User Bot User Bot User 
//
//
  bot.on('ready', function () { 
    bot.user.setGame('𝐒𝐨𝐨𝐧...').catch(console.error)
    bot.user.setUsername('Askip Bot').catch(console.error)
  })

  bot.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "╔🚀bienvenue").send(`**Hey Petit Pokemon Bienvenue sur La Team Askip Amuse toi bien ;)** ${member}`).catch(console.error)
  })
  
  bot.on('guildMemberRemove', member => {
    member.guild.channels.find("name", "╔🚀bienvenue").send(`**Un Pokemon c'est enfuit** :sob: ${member}`).catch(console.error)
    })
  
  bot.login('NTY3Mjk1OTUwMTQ2NzY0ODEw.XLRvtQ.406WZVb6gkn8LB0WM6cYl7I5fbg')
