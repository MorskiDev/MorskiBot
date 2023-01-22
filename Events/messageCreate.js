const Discord = require('discord.js')

module.exports = async (bot, message) => {
    let prefix = "-"

    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1)
    let command = messageArray[0].slice(prefix.length)

    if (!message.content.startsWith(prefix)) return;
    try {
        let commandExec = require(`../Commands/${command}`)
        commandExec.run(bot, message, args)
        }catch {return message.reply('Cette commande doesn\'t exist in ce bot.');}
}