var TelegramBot = require('node-telegram-bot-api');
 
var token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
var botOptions = { polling: true};
var bot = new TelegramBot(token, botOptions);
var messageText = msg.text;

bot.on('text', function(msg)
{
   
 
    if (messageText === '/sart') {
        sendMessageByBot(messageChatId, 'Hello World8784у4у87!/say');
    }
 
    console.log(msg);
});
 


 
bot.on('text', function(msg)
{
 
    if (messageText === '/say') {
        sendMessageByBot(messageChatId, 'Hello World!/say1');
    }
 
    console.log(msg);
});
 
