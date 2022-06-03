const { pullFactions } = require("../db_functions/pull_faction")

exports.getFactionOptions = async function () {
  const factions = await pullFactions()
  let mappedFactions = factions.map((faction) => {
    return {
      label: `${faction.color}`,
      description: `${faction.teamName} led by ${faction.commander}`,
      value: `${faction.index}`,
    }
  })
  console.log(...mappedFactions)
  return {
    ...mappedFactions,
  }
}
