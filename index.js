var TelegramBot = require('node-telegram-bot-api');
var token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
var botOptions = {polling: true};
var bot = new TelegramBot(token, botOptions);
 
bot.on('text', function(msg)
{  
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/start') 
    {sendMessageByBot(messageChatId, "3 Первая строчка" + '\n' + "Вторая строчка  /say2 ");}});

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/say2') 
    {sendMessageByBot(messageChatId, "4 Первая строчка" + '\n' + "Вторая строчка");}});



