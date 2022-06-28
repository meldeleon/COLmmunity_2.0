const { SlashCommandBuilder } = require("@discordjs/builders")
const { pullQueue } = require("..//db_functions/pull_queue")
const { pushQueue } = require("../db_functions/push_queue")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("start_war")
    .setDescription("Lock faction assignments & start the war!"),
  async execute(interaction) {
    // disable join, temporarily
    let currentQueue = await pullQueue()
    pushQueue(currentQueue, false)
    // unassign all existing roles
    // assign all new roles.
    // pull people into voice channel?
    await interaction.reply({
      content: `**${interaction.user.tag} has created a started the faction war, you can no longer join queue. Please wait for the next one!**`,
    })
  },
}
/*locks faction assignments, flips users in queue to false, assigns faction roles, sends out voice invites*/
