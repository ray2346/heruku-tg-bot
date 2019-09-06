var TelegramBot = require('node-telegram-bot-api');
var token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
var botOptions = {polling: true};
var bot = new TelegramBot(token, botOptions);
 
bot.on('text', function(msg)
{  
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/start') 
    {sendMessageByBot(messageChatId, " Москва нажмите  /city1 "+ '\n' + "-----------------" + '\n' + " Санкт-Петербург нажмите  /city2 " + '\n' + "-----------------");}});


bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/city1') 
    {sendMessageByBot(messageChatId, "Город:" + '\n' + "Москва"+ '\n' + "СК 0.5 (Alpha PVP) Синий крис."+ '\n' + "Цена: 1300руб."+ '\n' + "Нажмите /pay1");}});

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/pay1') 
    {sendMessageByBot(messageChatId, "Город:" + '\n' + "Санкт-Петербург"+ '\n' + "СК 0.5 (Alpha PVP) Синий крис."+ '\n' + "Цена: 1300руб."+ '\n' + "Нажмите /pay1");}});


bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/pay1') 
    {sendMessageByBot(messageChatId, "Город: Москва" + '\n' + "Товар: СК 0.5 (Alpha PVP) Синий крис."+ '\n' + "Метод оплаты: Qiwi "+ '\n' + "Цена: 1300руб."+ '\n' + "+79315929891");}});

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/pay1') 
    {sendMessageByBot(messageChatId, "Город: Санкт-Петербург" + '\n' + "Товар: СК 0.5 (Alpha PVP) Синий крис."+ '\n' + "Метод оплаты: Qiwi "+ '\n' + "Цена: 1300руб."+ '\n' + "+79315929891");}});





function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}


