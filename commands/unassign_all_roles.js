const { SlashCommandBuilder } = require("@discordjs/builders")
const { unassignRole } = require("../command_functions/unassign_role_function")
const { pullFactions } = require("../db_functions/pull_faction")
const { pullQueue } = require("../db_functions/pull_queue")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("unassign_roles")
    .setDescription("Unassigns users in factions from all roles"),
  async execute(interaction) {
    let factions = await pullFactions()
    let queue = await pullQueue()
    factions.forEach((faction) => {
      queue.forEach((user) => {
        unassignRole(user.user_id, faction.roleId, interaction)
      })
    })
    await interaction.reply(
      `${interaction.user.tag} has unassigned all roles to all queue members!`
    )
  },
}
