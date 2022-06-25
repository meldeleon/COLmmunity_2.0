const { SlashCommandBuilder } = require("@discordjs/builders")
const { pullQueue } = require("../db_functions/pull_queue")
const { resetQueue } = (module.exports = {
  data: new SlashCommandBuilder()
    .setName("clear_queue")
    .setDescription("Reset queue"),
  async execute(interaction) {
    const currentQueue = await pullQueue()
    resetQueue(currentQueue)
    await interaction.reply({
      content: `**${interaction.user.tag} has created reset all faction asiignes and queue, type /join to queue up for the war!**`,
    })
  },
})
