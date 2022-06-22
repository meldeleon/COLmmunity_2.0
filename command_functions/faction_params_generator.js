exports.factionParams = function (num) {
  return {
    count: num,
    teamNames: returnParam(num, _teamNames),
    colors: returnParam(num, _colors),
    discordChannels: returnParam(num, _discordChannels),
    roleIds: returnParam(num, _roleIds),
    commanders: returnParam(num, _commanders),
  }
}

const _colors = ["blue", "green", "red", "yellow"]
const _teamNames = ["Team Blue", "Team Green", " Team Red", "Team Yellow"]
const _teamHeaders = [
  `:large_blue_diamond: ${_teamNames[0]}: `,
  `:green_square: ${_teamNames[1]}:`,
  `:heart: ${_teamNames[2]}: `,
  `:yellow_circle: ${_teamNames[3]}`,
]

const _discordChannels = [
  "https://discord.com/channels/965039544183431188/965077230952804362",
  "https://discord.com/channels/965039544183431188/965078950449647686",
  "https://discord.com/channels/965039544183431188/965078506759389194",
  "https://discord.com/channels/965039544183431188/967949179328544819",
]
const _roleIds = [
  "965071590293393438", // blue
  "965071669007908934", // green
  "965071787316609045", // red
  "967943791644397689", // yellow
]
const _commanders = [
  "109422963136208896",
  "174039711340429312",
  "106871092743827456",
  "279052991976308738",
]

function returnParam(num, param) {
  let paramArr = []
  for (let i = 0; i < num; i++) {
    paramArr.push(param[i])
  }
  return paramArr
}
