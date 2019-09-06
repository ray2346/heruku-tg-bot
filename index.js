var TelegramBot = require('node-telegram-bot-api');
var token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
var botOptions = {polling: true};
var bot = new TelegramBot(token, botOptions);
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
bot.on('text', function(msg)
{
   

  
    if (messageText === '/start') 
    {sendMessageByBot(messageChatId, "3 Первая строчка" + '\n' + "Вторая строчка  /say2 ");}
     console.log(msg);
  
});
 bot.on('text', function(msg)
{
  
  
    if (messageText === '/say2') 
    {sendMessageByBot(messageChatId, "4 Первая строчка" + '\n' + "Вторая строчка");}
     console.log(msg);
  
});



function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}
