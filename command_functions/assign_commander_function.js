exports.assignCommander = function (userId, teamColor, currentFactions) {
  let updatedFactions = currentFactions.map((faction) => {
    if (faction.color === teamColor) faction.commander = userId
    return faction
  })
  return updatedFactions
}
