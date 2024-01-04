const Discord = require('discord.js')

module.exports = {
  name: "ping",

  async run(bot, message) {
    await message.reply(`Pong ! (\`${bot.ws.ping}\`ms)`)
  }
}