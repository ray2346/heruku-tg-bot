var TelegramBot = require('node-telegram-bot-api');
var token = '979957847:AAHysdp4haGKUFs9YiW0DG784p9P5Km-2Ss';
var botOptions = {polling: true};
var bot = new TelegramBot(token, botOptions);
 
bot.on('text', function(msg)
{  
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/start') 
    {sendMessageByBot(messageChatId, "Вас приветствует магазин - 🌈420_SHOP_family:🌈"  
+ '\n' + "Наши контакты:"  
+ '\n' + "Оператор -"  
+ '\n' + "👉 @OnixShop24" 
+ '\n' + "💠Мы на гидре"  
+ '\n' + "http://hydraruzxpnew4af.onion/market/2535"  
+ '\n' + "🔥Удачных покупок!🔥"   
+ '\n' + "➖➖➖➖➖➖➖➖➖➖"
+ '\n' + "🏠 Архангельск" 
+ '\n' + "[Нажмите 👉 /city1 ]");}}); 
                  

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/city1') 
    {sendMessageByBot(messageChatId, "  Город: " 
+ '\n' + "🏠 Архангельск " 
+ '\n' + "🎁 СК 0.3 (Alpha PVP) Синий крис." 
+ '\n' + "Цена: 900руб." 
+ '\n' + "[Нажмите 👉 /buy1 ]"
+ '\n' + "- " 
+ '\n' + "🎁 ТВ 3 (ШОК)"  
+ '\n' + "Цена: 1200руб." 
+ '\n' + "[Нажмите 👉 /buy1 ] " 
+ '\n' + "- " 
+ '\n' + "🎁 ШИШКИ 3 (WHITE WIDOW)"
+ '\n' + "Цена: 2900руб."  
+ '\n' + "[Нажмите 👉 /buy1 ]"
+ '\n' + "- " 
+ '\n' + "👉Если Вы выбрали не тот город, отправьте 👉 /start для того, чтобы вернуться к выбору городов.");}});  



bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/buy1') 
    {sendMessageByBot(messageChatId, "  🏠Город: Архангельск " 
+ '\n' + "🎁Товар: СК 0.3 (Alpha PVP) Синий крис." 
+ '\n' + "💰Цена: 900руб."
+ '\n' + "🏃  Октябрьский округ" 
+ '\n' + "[Для выбора нажмите 👉 /region1 ]" 
+ '\n' + "-" 
+ '\n' + "🏃  Соломбальский округ" 
+ '\n' + "[Для выбора нажмите 👉 /region1 ]" 
+ '\n' + "-" 
+ '\n' + "👉Если Вы выбрали не тот город, отправьте 👉 /start для того, чтобы вернуться к выбору городов. ");}});


bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/region1') 
    {sendMessageByBot(messageChatId, " 🏠Город: Архангельск" 
+ '\n' + "🎁Товар: СК 0.3 (Alpha PVP) Синий крис." 
+ '\n' + "🏃Район:  Октябрьский округ"
+ '\n' + "🔶Qiwi" 
+ '\n' + "[Для выбора нажмите 👉 /pay1_1 ]" 
+ '\n' + "-"
+ '\n' + "💳Карта" 
+ '\n' + "[Для выбора нажмите 👉 /pay1_1 ] "
+ '\n' + "-"
+ '\n' + "💰Bitcoin"  
+ '\n' + "[Для выбора нажмите 👉 /pay1_1]" 
+ '\n' + "-" 
+ '\n' + "👉Если Вы выбрали не тот город, отправьте 👉 /start для того, чтобы вернуться к выбору городов.");}});

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === 'pay1_1') 
    {sendMessageByBot(messageChatId, "🏠Город: Архангельск" 
+ '\n' + "🎁Товар: СК 0.3 (Alpha PVP) Синий крис." 
+ '\n' + "💰Цена: 900руб." 
+ '\n' + "🏃Район:  Октябрьский округ" 
+ '\n' + "👉Метод оплаты: Qiwi" 
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "👉Заказ №6805, запомните его."
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "Для приобретения выбранного товара, оплатите 900RUB на Qiwi кошелек:" 
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "+380987303864"
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "Комментарий: 680556" 
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "После оплаты нажмите" 
+ '\n' + "👉/check_6805 - для получения адреса." 
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "Комментарий служит исключительно для идентификации Вашего заказа." 
+ '\n' + "Оплачивать необходимо одним переводом с киви кошелька, оплата через терминал - НЕ ПРИНИМАЕТСЯ." 
+ '\n' + "Cумма перевода и кошелек должны быть точными, как указано в реквизитах выше, иначе Ваша оплата не засчитается.Будьте внимательны. ❗️ВНИМАНИЕ резерв 30 мин❗️"
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "👉Если Вы выбрали не тот город, отправьте 👉 /start для того, чтобы вернуться к выбору городов.");}});

bot.on('text', function(msg)
{
 var messageChatId = msg.chat.id;
 var messageText = msg.text;
  
    if (messageText === '/check_6805') 
    {sendMessageByBot(messageChatId,
"❌Платеж не найден❌"
+ '\n' + "Пожалуйста убедитесь что вы:" 
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "1⃣Действительно оплатили заказ." 
+ '\n' + "2⃣Перевели средства по тем реквизитам что вам выдал бот."
+ '\n' + "3⃣Указали верный комментарий."
+ '\n' + "➖➖➖➖➖➖➖➖➖➖" 
+ '\n' + "👉/check_6805 Проверить заказ.");}});

function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}


