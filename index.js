const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '882468554:AAH_8_eE4dATkcsVygNY0FuSPqVGMd4Q1Oc'
//C:\Users\Хозяина\WebstormProjects\heruku_bot9
const bot = new TelegramBot (TOKEN, {polling: true} )

bot.on('message', function (msg) {
var chatId = msg.chat.id;
console.log(msg);
if(msg.text == 'photo')
fs.exists(filename, function (exists) {
if(exists)
fs.unlinkSync(filename);
imagesnapjs.capture(filename, { cliflags: '-w 2'}, function(err) {
console.log(err ? err : 'Success!');
bot.sendPhoto(chatId, filename, {caption: "It's your photo!"});
});
});
});
