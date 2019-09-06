var TelegramBot = require('node-telegram-bot-api');
var token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
var botOptions = {polling: true};
var bot = new TelegramBot(token, botOptions);
 bot.on('text', function(msg)
{
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    var messageDate = msg.date;
    var messageUsr = msg.from.username;
   if (messageText === '/start') {
        sendMessageByBot(messageChatId, "1 Первая строчка/say1" + '\n' + "Вторая строчка");
  if (messageText === '/say1') {
        sendMessageByBot(messageChatId, "2 Первая строчка/say2" + '\n' + "Вторая строчка");
    if (messageText === '/say2') {
        sendMessageByBot(messageChatId, "3 Первая строчка" + '\n' + "Вторая строчка");
    }
 
    console.log(msg);
});
 
function sendMessageByBot(aChatId, aMessage)
{
    bot.sendMessage(aChatId, aMessage, { caption: 'I\'m a cute bot!' });
}
