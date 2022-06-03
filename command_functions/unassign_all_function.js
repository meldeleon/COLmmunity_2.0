exports.unassignAll = function (factions) {
  factions.forEach((faction) => (faction.users = []))
  return factions
}
