const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Replies with server info!"),
  async execute(interaction) {
    console.log(interaction.user)
    await interaction.reply({
      content: `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`,
      ephemeral: true,
    })
  },
}
