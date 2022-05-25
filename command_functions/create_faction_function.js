exports.createFactions = function (factionParams) {
  let { count, teamNames, colors, discordChannels, roleIds, commanders } =
    factionParams
  let factions = []
  let max = Math.ceil((60 - count) / count)
  for (let i = 0; i < count; i++) {
    let faction = {
      teamName: teamNames[i],
      color: colors[i],
      discordChannel: discordChannels[i],
      users: [],
      maxUsers: max,
      roleId: roleIds[i],
      commander: commanders[i],
    }
    factions.push(faction)
  }
  return factions
}
