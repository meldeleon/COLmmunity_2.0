const { SlashCommandBuilder } = require("@discordjs/builders")
const { pullFactions } = require("../db_functions/pull_faction")
const { pullQueue } = require("../db_functions/pull_queue")
const { reset } = require("../command_functions/reset_function")
module.exports = {
  data: new SlashCommandBuilder()
    .setName("reset")
    .setDescription("Reset queue, and faction assignments"),
  async execute(interaction) {
    const currentQueue = await pullQueue()
    const currentFactions = await pullFactions()
    console.log(currentFactions)
    reset(currentFactions, currentQueue)
    await interaction.reply({
      content: `**${interaction.user.tag} has  reset all faction assignments and queue, type /join to queue up for the war!**`,
    })
  },
}
