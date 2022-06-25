const { pushQueue } = require("../db_functions/push_queue")
const { pushFaction } = require("../db_functions/push_faction")

exports.reset = function (factions, queue) {
  let updatedFactions = factions.map((faction) => {
    let newFaction = { ...faction }
    newFaction.users = []
    return newFaction
  })
  pushFaction(updatedFactions)
  let updatedQueue = queue.map((user) => {
    let newUser = { ...user }
    newUser.queued = false
    return newUser
  })
  pushQueue(updatedQueue)
}
