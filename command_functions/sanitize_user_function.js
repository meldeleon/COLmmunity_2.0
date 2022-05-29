exports.sanitizeUserIds = async function (userIds, interaction) {
  let sanitizedList = []
  for (const userId of userIds) {
    let user = await interaction.guild.members.fetch(userId).catch((error) => {
      console.error(error)
      return undefined
    })
    if (user != undefined) {
      sanitizedList.push(userId)
    }
  }
  console.log({ userIds }, { sanitizedList })
  return sanitizedList
}
