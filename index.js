
var TelegramBot = require('node-telegram-bot-api');
var token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
var botOptions = {
    polling: true
};
var bot = new TelegramBot(token, botOptions);
 
bot.getMe().then(function(me));
 
bot.on('text', function(msg)
{
    var messageText = msg.text;
    if (messageText === '/say') {
        sendMessageByBot(messageChatId, 'Hello World!');
    }
 
    console.log(msg);
});


