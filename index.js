const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc'
const bot = new TelegramBot (TOKEN, {polling: true} )

sendMessageByBot(messageChatId, 'helloy epta yeba)))/say')
bot.on('text', function(msg)
{
    if (messageText === '/say') {
        sendMessageByBot(messageChatId, 'Hello World!');
    }
 
    console.log(msg);
});
