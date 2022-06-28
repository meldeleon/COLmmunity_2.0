const { SlashCommandBuilder } = require("@discordjs/builders")
const { printQueue } = require("../command_functions/print_queue_function")
const { pullQueuedUsers } = require("../db_functions/pull_queued_users")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("print_queue")
    .setDescription("Prints the current queue"),
  async execute(interaction) {
    let queue = await pullQueuedUsers()
    let responseString = printQueue(queue)
    console.log(queue)
    await interaction.reply({
      content: `The current queue is: ${responseString} `,
      ephemeral: true,
    })
  },
}
