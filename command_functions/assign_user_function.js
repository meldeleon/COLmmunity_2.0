exports.assignUser = function (userId, teamColor, currentFactions) {
  let updatedFactions = currentFactions.map((faction) => {
    if (faction.color === teamColor) faction.users.push(userId)
    return faction
  })
  return updatedFactions
}
