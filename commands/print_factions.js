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
    let faction = await pullFactions()
    await interaction.reply(`${printFactions(faction)}`)
  },
}
