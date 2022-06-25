const { SlashCommandBuilder } = require("@discordjs/builders")
const {
  getFactionOptions,
} = require("../command_functions/faction_options_function")
const {
  assignCommander,
} = require("../command_functions/assign_commander_function")
const { pullFactions } = require("../db_functions/pull_faction")
const { pushFaction } = require("../db_functions/push_faction")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("assign_commander")
    .setDescription("assign a commander to a faction.")
    .addUserOption((option) =>
      option.setName("user").setDescription("user to assign.").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("faction")
        .setRequired(true)
        .setDescription("select the faction to assign the user to.")
        .addChoices(
          { name: "blue", value: "blue" },
          { name: "green", value: "green" },
          { name: "red", value: "red" },
          { name: "yellow", value: "yellow" }
        )
    ),
  async execute(interaction) {
    let currentFactions = await pullFactions()
    let selectedOptions = interaction.options._hoistedOptions
    let userId = selectedOptions[0].value
    let selectedFaction = selectedOptions[1].value
    let updatedFaction = assignCommander(
      userId,
      selectedFaction,
      currentFactions
    )
    console.log(updatedFaction)
    pushFaction(updatedFaction)
    await interaction.reply({
      content: `Assigning <@${userId}> to ${selectedFaction} faction.`,
    })
  },
}
