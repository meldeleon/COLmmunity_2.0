const user = require("../commands/user")

exports.assignAll = function (queue, factions) {
  let users = queue.map((user) => {
    return user.id
  })
  let factionCount = factions.length
  let teams
  switch (factionCount) {
    case 2:
      teams = assignTwoTeams(users)
      break
    case 3:
      teams = assignThreeTeams(users)
      break
    case 4:
      teams = assignFourTeams(users)
      break
    default:
      teams = []
  }
  return factions.map((faction, index) => {
    let assignedFaction = { ...faction }
    assignedFaction.users = teams[index]
  })
}

function assignTwoTeams(users) {
  let teams = new Array(2).fill(Array())
  users.forEach((user, index) => {
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
  users.forEach((user, index) => {
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
  users.forEach((user, index) => {
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
