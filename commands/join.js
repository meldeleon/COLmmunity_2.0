const { SlashCommandBuilder } = require("@discordjs/builders")
const { pullQueue } = require("../db_functions/pull_queue")
const { pullQueueStatus } = require("../db_functions/pull_queue_status")
const { join } = require("../command_functions/join_function")
const { pushQueue } = require("../db_functions/push_queue")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Join a faction war."),
  async execute(interaction) {
    let currentQueue = await pullQueue()
    let queueStatus = await pullQueueStatus()
    console.log(queueStatus)
    if (queueStatus) {
      let updatedQueue = join(currentQueue, interaction.user)
      pushQueue(updatedQueue)
      console.log(`${interaction.user.tag} has joined the queue`)
      await interaction.reply({
        content: `HA! You're in! Now be ready to join your faction if you get picked.`,
        ephemeral: true,
      })
    } else {
      await interaction.reply({
        content: `The queue is currently not open, please wait for an admin to begin a faction war!`,
        ephemeral: true,
      })
    }
  },
}
