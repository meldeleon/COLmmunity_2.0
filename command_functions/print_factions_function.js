exports.printFactions = function (factions) {
  let printStatements = factions.map((faction, index) => {
    let symbolMap = {
      blue: `:large_blue_diamond:`,
      green: `:green_square:`,
      red: `:heart:`,
      yellow: `:yellow_circle:`,
    }
    let userList = faction.users.map((user) => {
      return `<@${user}>`
    })
    let commander = faction.commander
    return `${symbolMap[faction.color]} ${
      faction.teamName
    } - :crossed_swords: Commander: <@${commander}>, ${userList} \n ━━━━━━━━━━━━━━━━━━━━`
  })
  return printStatements.join("\n")
}
