require("dotenv").config()
const token = process.env.DISCORD_TOKEN
const fs = require("node:fs")
const path = require("node:path")

// Require the necessary discord.js classes
const { Client, Collection, Intents } = require("discord.js")

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

// Grab commands from the commands folder
client.commands = new Collection()
const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js"))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath)
  client.commands.set(command.data.name, command)
}

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!")
})

// Command handler
client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return
  const command = client.commands.get(interaction.commandName)
  if (!command) return
  try {
    await command.execute(interaction)
  } catch {
    console.log(error)
    await interaction.reply({
      content: `There was an error while executing this command!`,
      ephemeral: true,
    })
  }
})
// Login to Discord with your client's token
client.login(token)
