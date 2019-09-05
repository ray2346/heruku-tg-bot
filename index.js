const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc'
const bot = new TelegramBot (TOKEN, {polling: true} )

bot.on('message', msg =>
{bot.sendMessage (msg.chat.id, 'helloy epta yeba)))/say')})
bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;
 
    if (messageText === '/say') {
        sendMessageByBot(messageChatId, 'Hello World!');
    }
 
    console.log(msg);
});
