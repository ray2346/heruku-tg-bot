const TelegramBot = require('node-telegram-bot-api');
const  token = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc';
const  botOptions = {polling: true};
const  bot = new TelegramBot(token, botOptions);

bot.on('text', function(msg)
{
    const  messageChatId = msg.chat.id;
    const  messageText = msg.text;
   const  messageDate = msg.date;
   const  messageUsr = msg.from.username;
 
    if (messageText === '/say') {
        sendMessageByBot(messageChatId, 'Hello World!');
    }
 
    console.log(msg);
});
 
