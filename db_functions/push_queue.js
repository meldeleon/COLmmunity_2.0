require("dotenv").config()
const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient({
  region: "us-west-2",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

exports.pushQueue = function (queue) {
  let params = {
    TableName: "col_queue",
    Item: {
      id: "butts",
      queued_users: queue,
    },
  }
  dynamodb.put(params, function (err, data) {
    if (err) {
      console.log(`Failed to push queue`, err, err.stack)
    } else {
      console.log(`queue was pushed to queue table`)
    }
  })
}
