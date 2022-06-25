const { SlashCommandBuilder } = require("@discordjs/builders")
const { pullQueue } = require("../db_functions/pull_queue")
const { resetQueue } = require("../command_functions/reset_queue_function")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("reset_queue")
    .setDescription("Resets the queue."),
  async execute(interaction) {
    const currentQueue = await pullQueue()
    resetQueue(currentQueue)
    await interaction.reply({
      content: `**${interaction.user.tag} has reset the queue, type /join to queue up for the war!**`,
    })
  },
}
