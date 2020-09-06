
import Discord from 'discord.js-light'
const client = new Discord.Client()

const emojis = [
  ':smile:',
  ':smiley:',
  ':smiley_cat:',
  ':sweat_smile:',
  ':upside_down:',
  ':smiling_imp:',
]

function generateReply() {
  let randomNumber = Math.floor(Math.random() * 20)

  if (randomNumber == 0) {
    return emojis[Math.floor(Math.random() * emojis.length)]
  } else {
    return ':slight_smile:'
  }
}

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
    message.reply(generateReply())
  }
})

client.login(process.argv.pop())
