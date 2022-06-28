const { SlashCommandBuilder } = require("@discordjs/builders")
const {
  assignAllRandom,
} = require("../command_functions/assign_all_random_users_function")
const { pullFactions } = require("../db_functions/pull_faction")
const { pullQueuedUsers } = require("../db_functions/pull_queued_users")
const { pushFaction } = require("../db_functions/push_faction")
const {
  printFactions,
} = require("../command_functions/print_factions_function")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("assign_all")
    .setDescription("assign all users in queue to factions"),
  async execute(interaction) {
    let queue = await pullQueuedUsers()
    let factions = await pullFactions()
    let assignedFactions = assignAllRandom(queue, factions)
    pushFaction(assignedFactions)
    console.log(
      `${interaction.user.tag} has assigned all queued users to factions`
    )
    await interaction.reply({
      content: `**${interaction.user.tag} has created assigned all queued users to factions!**`,
    })
  },
}
