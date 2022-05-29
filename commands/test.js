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
    let testResponse = await interaction.guild.members
      .fetch("882498923476955147")
      .catch((error) => {
        console.error(error)
        return undefined
      })
    console.log(testResponse)
    await interaction.reply({ content: `this is a test!`, ephemeral: true })
  },
}
