const { SlashCommandBuilder } = require("@discordjs/builders")
const { unassignAll } = require("../command_functions/unassign_all_function")
const { pullFactions } = require("../db_functions/pull_faction")
const { pushFaction } = require("../db_functions/push_faction")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unassign_all")
    .setDescription("unassign all users from factions"),
  async execute(interaction) {
    let factions = await pullFactions()
    let unassignedFactions = unassignAll(factions)
    pushFaction(unassignedFactions)
    console.log(
      `${interaction.user.tag} has unassigned all users from factions`
    )
    await interaction.reply({
      content: `**${interaction.user.tag} has created unassigned all queued users from factions!**`,
    })
  },
}
