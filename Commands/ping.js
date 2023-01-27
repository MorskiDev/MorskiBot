const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Donne le temps de latence du bot en millisecondes.",
    dm: false,

    async run(bot, message) {
        await message.reply(`🏓 Pong ! \`${bot.ws.ping}ms\``)
    }
}