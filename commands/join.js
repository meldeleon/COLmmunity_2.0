const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("join")
    .setDescription("Join a faction war."),
  async execute(interaction) {
    await interaction.reply({
      content: `HA! You're in! Now be ready to join your faction if you get picked.`,
      ephemeral: true,
    })
  },
}
