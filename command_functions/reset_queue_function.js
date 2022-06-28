const { pushQueue } = require("../db_functions/push_queue")

exports.resetQueue = function (queue) {
  let updatedQueue = queue.map((user) => {
    let newUser = { ...user }
    newUser.queued = false
    return newUser
  })
  pushQueue(updatedQueue, true)
}
