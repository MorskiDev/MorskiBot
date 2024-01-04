const fs = require('fs')
module.exports = async bot => {
  fs.readdirSync('./commands').filter(f => f.endsWith('.js')).forEach(async file => {
    let command = require(`../commands/${file}`)
    if (!command.name || typeof command.name !== "string") throw new TypeError(`La commande ${file.slice(0, file.length - 3)} doesn't have un nom.`)
    bot.commands.set(command.name, command)
    console.log(`Commande ${file} is alive et chargée succesfully !`)
  })
}