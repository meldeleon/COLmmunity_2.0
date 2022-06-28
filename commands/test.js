const { testQueue } = require("../test_data.js")
const { pullQueue } = require("../db_functions/pull_queue")
const { pushQueue } = require("../db_functions/push_queue")
const { pullFactions } = require("../db_functions/pull_faction")
const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("test")
    .setDescription("testing grounds for commands!"),
  async execute(interaction) {
    pushQueue(testQueue, true)
    await interaction.reply({ content: `this is a test!`, ephemeral: true })
  },
}
