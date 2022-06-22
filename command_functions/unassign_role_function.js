exports.unassignRole = async function (userId, roleId, interaction) {
  let user = await interaction.guild.members.fetch(userId).catch(console.error)
  let role = await interaction.guild.roles.fetch(roleId).catch(console.error)
  await user.roles.remove(role).catch(console.error)
}
