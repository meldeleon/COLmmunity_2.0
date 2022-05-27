const { testQueue, testFactions } = require("./test_data")
const { selectUsers } = require("./command_functions/select_users_function")

let users = selectUsers(testQueue, testFactions)

console.log(assignTwoTeams(users))

function assignTwoTeams(users) {
  let teams = [[], []]
  users.forEach((user, index) => {
    if (index % 2 === 0) {
      teams[1].push(user)
      console.log(`math is 0, pushing ${user} to teams[1]`)
    } else {
      console.log(`math is 1, pushing ${user} to teams[0]`)
      teams[0].push(user)
    }
  })
  return teams
}
