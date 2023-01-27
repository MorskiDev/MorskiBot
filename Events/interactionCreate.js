const Discord = require('discord.js')

module.exports = async (bot, interaction) => {
    if (interaction.type === Discord.InteractionType.ApplicationCommand) {
        try {
            let commandExec = require(`../Commands/${interaction.command}`)
            commandExec.run(bot, interaction, command.options)
            }catch {return message.reply('Cette commande doesn\'t exist in ce bot.');}
    }
}