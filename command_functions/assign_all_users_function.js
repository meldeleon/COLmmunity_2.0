const user = require("../commands/user")

exports.assignAll = function (queue, factions) {
  let assignedFactions = faction.map
}

function assignTwoTeams(users) {
  let teams = new Array(2).fill(Array())
  users.forEach((user) => {
    if (index % 2 === 0) {
      teams[1].push(user)
    } else {
      teams[0].push(user)
    }
  })
  return teams
}

function assignThreeTeams(users) {
  let teams = new Array(3).fill(Array())
  users.forEach((user) => {
    if (index % 3 === 0) {
      teams[2].push(user)
    } else if (index % 3 === 1) {
      teams[1].push(user)
    } else {
      teams[0].push(user)
    }
  })
  return teams
}

function assignFourTeams(users) {
  let teams = new Array(4).fill(Array())
  users.forEach((user) => {
    if (index % 4 === 0) {
      teams[3].push(user)
    } else if (index % 4 === 1) {
      teams[2].push(user)
    } else if (index % 4 === 2) {
      teams[1].push(user)
    } else {
      teams[0].push(user)
    }
  })
}
