const Discord = require('discord.js')
const bot = new Discord.Client({intents: 3276799})
const config = require('./config')

bot.on("ready", async () => {
    console.log(`${bot.user.tag} is alive et allumé succesfully !`)
})

bot.login(config.token)
