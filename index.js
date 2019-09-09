var TelegramBot = require('node-telegram-bot-api');
var token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
var botOptions = {polling: true};
var bot = new TelegramBot(token, botOptions);
 
bot.on('text', function(msg)
{  
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/start') 
    {sendMessageByBot(messageChatId, "Вас приветствует магазин - 🌈420_SHOP_family:🌈" 
                  

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/city1') 
    {sendMessageByBot(messageChatId, "Город:" + '\n' +"🏠 Москва /city1 "+ '\n' +
+ '\n' +"🎁 СК 0.3 (Alpha PVP) Синий крис."+ '\n' + 
+ '\n' +"[Нажмите 👉 /pay1 ]"



bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/city2') 
    {sendMessageByBot(messageChatId,
                    "Город:" + '\n' +"🏠 Санкт-Петербург "


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
  
    if (messageText === '/pay2') 
    {sendMessageByBot(messageChatId, "Город: Санкт-Петербург" + '\n' + "Товар: СК 0.5 (Alpha PVP) Синий крис."+ '\n' + "Метод оплаты: Qiwi "+ '\n' + "Цена: 1300руб."+ '\n' + "+79315929891");}});


function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}


