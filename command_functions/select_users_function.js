exports.selectUsers = function (queue, factions) {
  let sortedQueue = queue.sort(function (a, b) {
    return a.games_played - b.games_played
  })
  let factionCount = factions.length
  let users = sortedQueue.map((user) => user.user_id)
  let maxUsers = users.slice(0, 60 - factionCount)
  return maxUsers
}
