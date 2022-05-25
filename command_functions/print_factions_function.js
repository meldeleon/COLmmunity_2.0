exports.printFactions = function (factions) {
  let symbolMap = {
    blue: `:large_blue_diamond:`,
    green: `:green_square:`,
    red: `:heart:`,
    yellow: `:yellow_circle:`,
  }
  let printStatements = factions.map((faction) => {
    let userList = faction.users.map((user) => {
      return `<@${user}>`
    })
    return `${faction.teamName}: ${userList} `
  })
  return printStatements.join("\n")
}
