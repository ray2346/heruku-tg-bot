const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc'
//C:\Users\Хозяина\WebstormProjects\heruku_bot9
const bot = new TelegramBot (TOKEN, {polling: true} )
bot.on('message', msg =>
{bot.sendMessage (msg.chat.id, 'helloy ve pidor tebe pizda)))')})
if message.text == "Привет":
    bot.send_message(message.from_user.id, "Привет, чем я могу тебе помочь?")
elif message.text == "/help":
    bot.send_message(message.from_user.id, "Напиши привет")
else:
    bot.send_message(message.from_user.id, "Я тебя не понимаю. Напиши /help.")
bot.polling(none_stop=True, interval=0)
