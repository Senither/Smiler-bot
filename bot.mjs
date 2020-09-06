
import Discord from 'discord.js-light'
const client = new Discord.Client()

const emojis = [
  ':smile:',
  ':slight_smile:',
  ':smiley:',
  ':smiley_cat:',
  ':sweat_smile:',
]

function isSmileMessage(message) {
  return message.mentions.users.has(client.user.id)
      || message.content.toLowerCase().includes('smile')
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', message => {
  if (message.author.bot) {
    return
  }

  if (isSmileMessage(message)) {
    message.reply(emojis[Math.floor(Math.random() * emojis.length)])
  }
})

client.login(process.argv.pop())
