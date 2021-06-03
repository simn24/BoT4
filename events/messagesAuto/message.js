// Ping text !-------------------- \\
module.exports = (client, message) => {

  if (message.content === 'ping') return message.channel.send('Pong !');

 // Salut text !------------------ \\

if (message.content === 'Salut' || message.content === 'Bonjour' && message.author.client) return message.channel.send('yo');

// stop ping pd \\ 

if (message.content === "Oui" && message.author.client) return message.reply('Non ')
if (message.content === "Non" && message.author.client) return message.reply('Oui')
if (message.content === "ah ok" && message.author.client) return message.reply('ok ah')
if (message.content === "voc" && message.author.client) return message.reply('d\'acc j\'arrive prépare les capotes')
}
