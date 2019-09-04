const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc'
const bot = new TelegramBot (TOKEN, {polling: true} )

bot.on('message', msg =>
{bot.sendMessage (msg.chat.id, 'helloy epta yeba)))/start11')})


bot.hears('/start11', (ctx) => ctx.reply('Hey there'))
