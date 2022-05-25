const { SlashCommandBuilder } = require("@discordjs/builders")
const { factionParams } = require("../test_data.js")
const {
  createFactions,
} = require("../command_functions/create_faction_function.js")
const { pushFaction } = require("../db_functions/push_faction.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("faction")
    .setDescription("create  a faction war."),
  async execute(interaction) {
    let factions = createFactions(factionParams)
    pushFaction(factions)
    console.log(`${interaction.user.tag} has created new factions`)
    await interaction.reply({
      content: `**${interaction.user.tag} has created a faction war, type /join to queue up for the war!**\n factions: \n`,
    })
  },
}
