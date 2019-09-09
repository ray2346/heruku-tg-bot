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
                      + '\n' + "Наши контакты: 👉 @OnixShop24" +  '\n' +
                      +'\n'+ "💠Мы на гидре  -http://hydraruzxpnew4af.onion/market/2535  " + '\n' + 
                      +'\n'+ "🔥Удачных покупок!🔥 " + '\n' + 
                      +'\n'+ " ➖➖➖➖➖➖➖➖➖➖ 🏠 " + '\n' +
                      +'\n'+ " Выберете город "+ '\n' + 
                      +'\n'+ " Москва нажмите  /city1 " +'\n'+ 
                      +'\n'+ " Санкт-Петербург нажмите  /city2 "+'\n'+ );}});


bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/city1') 
    {sendMessageByBot(messageChatId,
                      
"Город:" 
+ '\n' +"🏠 Москва "+ '\n' +
+ '\n' +"🎁 СК 0.3 (Alpha PVP) Синий крис."+ '\n' + 
+ '\n' +"Цена: 900руб."+ '\n' + 
+ '\n' +"[Нажмите 👉 /pay1 ]"+ '\n' + 
+ '\n' +"-"+ '\n' +
+ '\n' + "🎁 ТВ 3 (ШОК)"+ '\n' + 
+ '\n' + "Цена: 1200руб."+ '\n' + 
+ '\n' + "[Нажмите 👉 /pay1 ]"+ '\n' + 
+ '\n' + "-" + '\n' +
+ '\n' + "🎁 ШИШКИ 3 (WHITE WIDOW)" 
+ '\n' + "Цена: 2900руб."+ '\n' + 
+ '\n' + "[Нажмите 👉 /pay1 ]"+ '\n' + 
+ '\n' + "- "+ '\n' +

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/city2') 
    {sendMessageByBot(messageChatId,
                      "Город:" 
+ '\n' +"🏠 Санкт-Петербург "+ '\n' +
+ '\n' +"🎁 СК 0.3 (Alpha PVP) Синий крис."+ '\n' + 
+ '\n' +"Цена: 900руб."+ '\n' + 
+ '\n' +"[Нажмите 👉 /pay2 ]"+ '\n' + 
+ '\n' +"-"+ '\n' +
+ '\n' + "🎁 ТВ 3 (ШОК)"+ '\n' + 
+ '\n' + "Цена: 1200руб."+ '\n' + 
+ '\n' + "[Нажмите 👉 /pay2 ]"+ '\n' + 
+ '\n' + "-" + '\n' +
+ '\n' + "🎁 ШИШКИ 3 (WHITE WIDOW)" 
+ '\n' + "Цена: 2900руб."+ '\n' + 
+ '\n' + "[Нажмите 👉 /pay2 ]"+ '\n' + 
+ '\n' + "- "+ '\n' +);}});


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


