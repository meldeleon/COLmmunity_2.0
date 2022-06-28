require("dotenv").config()
const AWS = require("aws-sdk")
const dynamodb = new AWS.DynamoDB.DocumentClient({
  region: "us-west-2",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

exports.pullQueueStatus = async function () {
  let params = {
    ExpressionAttributeValues: {
      ":i": "butts",
    },
    KeyConditionExpression: "id = :i",
    TableName: "col_queue",
  }
  try {
    const results = await dynamodb.query(params).promise()
    return results.Items[0].open
  } catch (err) {
    console.error(err)
  }
}
