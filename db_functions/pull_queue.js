require("dotenv").config()
const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient({
  region: "us-west-2",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

exports.pullQueue = function () {
  let params = {
    ExpressionAttributeValues: {
      ":i": "butts",
    },
    KeyConditionExpression: "id = :i",
    TableName: "col_queue",
  }
  dynamodb.query(params, function (err, data) {
    if (err) {
      console.log(`Failed to pull queue`, err, err.stack)
    } else {
      let queue = data.Items
      console.log({ queue })
    }
  })
}
