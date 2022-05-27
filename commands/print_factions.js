const { SlashCommandBuilder } = require("@discordjs/builders")
const { pullFactions } = require("../db_functions/pull_faction")
const {
  printFactions,
} = require("../command_functions/print_factions_function")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("print_factions")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    let factions = await pullFactions()
    let printStatement = printFactions(factions)
    await interaction.reply(`${printStatement}`)
  },
}
