const { SlashCommandBuilder } = require("@discordjs/builders")
const { assignRole } = require("../command_functions/assign_role_function")
const { pullFactions } = require("../db_functions/pull_faction")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("assign_roles")
    .setDescription("Assigns users in faction their proper roles."),
  async execute(interaction) {
    let factions = await pullFactions()
    factions.forEach((faction) => {
      faction.users.forEach((userId) => {
        assignRole(userId, faction.roleId, interaction)
      })
    })
    await interaction.reply(
      `${interaction.user.tag} has created assigned roles to all faction members, join make sure to join your discord channel!`
    )
  },
}
