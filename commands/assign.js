const { SlashCommandBuilder } = require("@discordjs/builders")
const {
  getFactionOptions,
} = require("../command_functions/faction_options_function")
const { assignUser } = require("../command_functions/assign_user_function")
const { pullFactions } = require("../db_functions/pull_faction")
const { pullFaction, pushFaction } = require("../db_functions/push_faction")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("assign")
    .setDescription("assign a specific user to a faction.")
    .addUserOption((option) =>
      option.setName("user").setDescription("user to assign.")
    )
    .addStringOption((option) =>
      option
        .setName("faction")
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
    let updatedFaction = assignUser(userId, selectedFaction, currentFactions)
    console.log(updatedFaction)
    pushFaction(updatedFaction)
    await interaction.reply({
      content: `Assigning <@${userId}> to ${selectedFaction} faction.`,
    })
  },
}
