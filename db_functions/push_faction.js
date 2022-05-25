require("dotenv").config()
const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient({
  region: "us-west-2",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})
const { butts } = require("../command_functions/butts.js")

exports.pushFaction = function (factions) {
  let params = {
    TableName: "col_factions",
    Item: {
      id: butts(),
      factions_list: factions,
    },
  }
  dynamodb.put(params, function (err, data) {
    if (err) {
      console.log(`Failed to push queue`, err, err.stack)
    } else {
      console.log(`factions was pushed to col_factions table`)
    }
  })
}
