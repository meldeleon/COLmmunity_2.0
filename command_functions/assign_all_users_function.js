const { selectUsers } = require("./select_users_function")

exports.assignAll = function (queue, factions) {
  let selectedUsers = selectUsers(queue, factions)
  let factionCount = factions.length
  switch (factionCount) {
    case 2:
      teams = assignTwoTeams(selectedUsers)
      break
    case 3:
      teams = assignThreeTeams(selectedUsers)
      break
    case 4:
      teams = assignFourTeams(selectedUsers)
      break
    default:
      teams = []
  }
  return factions.map((faction, index) => {
    let assignedFaction = { ...faction }
    assignedFaction.users = teams[index]
    return assignedFaction
  })
}

function assignTwoTeams(users) {
  let teams = [[], []]
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
  let teams = [[], [], []]
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
  let teams = [[], [], [], []]
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
