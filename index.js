const Telegraf = require('telegraf');
const Odoo = require('odoo-xmlrpc');
const HttpsProxyAgent = require('https-proxy-agent');
const bot = new Telegraf('920335983:AAFlDP4sSiRpOsUBCIbf9hxHAqnbTrrN6Dw',{
    telegram:{
        agent: new HttpsProxyAgent({
            host: '144.217.74.219',
            port: '3128'
        })
    }
}); // Создаем нашего бота и прописываем прокси (для РФ)
const textHello = "hi!\n"+
            "hello";
const textHelp = '/help - список всех команд\n'+
                '/test - пока не придумал';
bot.start((ctx) => {
    console.log('Id пользователя:', ctx.from.id);
    return ctx.reply('Добро пожаловать!');
  });
  bot.hears('hi', ctx => {
      
     return ctx.reply(textHello);
   });
   bot.command('help', ctx => {
       return ctx.reply(textHelp);
   });
   
   bot.startPolling();