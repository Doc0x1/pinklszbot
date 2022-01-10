const { Client, Intents } = require("discord.js")
const { token } = require("./config.json")

const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "GUILD_PRESENCES",
    "GUILD_BANS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_INTEGRATIONS",
    "GUILD_INVITES",
    "GUILD_MEMBERS",
    "GUILD_SCHEDULED_EVENTS",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING",
  ],
})

client.on("ready", () => {
  console.log("Bot is ready!")
})

client.login(token)

client.on("messageCreate", (msg) => {
  if (msg.content === "ping") {
    msg.reply("pong")
  }
})
