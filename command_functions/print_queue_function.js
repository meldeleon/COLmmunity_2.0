const AsciiTable = require("ascii-table")

exports.printQueue = function (queue) {
  let rowArray = queue.map((user, index) => {
    return [index, user.user_name, user.games_played]
  })
  let tableParams = {
    title: "Faction Wars Queue",
    heading: ["#", "user name", "games played"],
    rows: rowArray,
  }
  let table = new AsciiTable().fromJSON(tableParams)
  let responseString = `\`\`\` ${table} \`\`\``
  return responseString
}
