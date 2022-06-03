exports.unassignUser = function (userId, teamColor, currentFactions) {
  let updatedFactions = currentFactions.map((faction) => {
    if (faction.color === teamColor) {
      let newUsers = faction.users.filter((user) => user != userId)
      faction.users = newUsers
    }
    return faction
  })
  return updatedFactions
}
