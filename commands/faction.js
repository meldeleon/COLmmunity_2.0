const { SlashCommandBuilder } = require("@discordjs/builders")
const {
  factionParams,
} = require("../command_functions/faction_params_generator")
const {
  createFactions,
} = require("../command_functions/create_faction_function.js")
const { pushFaction } = require("../db_functions/push_faction.js")
const {
  printFactions,
} = require("../command_functions/print_factions_function")
const req = require("express/lib/request")
const { pullQueue } = require("../db_functions/pull_queue")
const { pushQueue } = require("../db_functions/push_queue")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("faction")
    .setDescription("create a faction war.")
    .addIntegerOption((option) =>
      option
        .setName("number")
        .setDescription("enter number of factions")
        .setRequired(true)
        .addChoices(
          { name: "Two Factions", value: 2 },
          { name: "Three Factions", value: 3 },
          { name: "Four Factions", value: 4 }
        )
    ),
  async execute(interaction) {
    let currentQueue = await pullQueue()
    pushQueue(currentQueue, true)
    let numberOfFactions = interaction.options.getInteger("number")
    let factions = createFactions(factionParams(numberOfFactions))
    pushFaction(factions)
    console.log(`${interaction.user.tag} has created new factions`)
    await interaction.reply({
      content: `**${
        interaction.user.tag
      } has created a faction war, type /join to queue up for the war!**\n ${printFactions(
        factions
      )}`,
    })
  },
}
