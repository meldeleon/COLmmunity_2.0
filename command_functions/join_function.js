exports.join = function (queue, member) {
  let viewer = {
    user_id: member.id,
    user_name: member.username,
    queued: true,
    games_played: 0,
  }
  let newQueue = []
  let isDupe = false
  if (queue != undefined) {
    newQueue = queue.map((user) => {
      return { ...user }
    })
    queue.forEach((x, index) => {
      if (x.user_id === viewer.user_id) {
        isDupe = true
        newQueue[index].queued = true
      }
    })
    if (!isDupe) {
      newQueue.push(viewer)
    }
  } else {
    newQueue.push(viewer)
  }
  return newQueue
}
