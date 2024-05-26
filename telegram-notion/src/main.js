import { Telegraf } from 'telegraf';
import config from 'config';
import { message } from 'telegraf/filters'

import {chatGPT} from './openai.js';
import { notionCreate } from './notion.js'
import { Loader } from './loader.js'

const bot = new Telegraf(config.get('TELEGRAM_BOT'), {
  handlerTimeout: Infinity, // это нужно чтобы бот ждал ответа сколько угодно, а не скидывал коннект
});

bot.command('start', ctx => {
  ctx.reply('Добро пожаловать')
})

bot.on(message('text'), async ctx => {
  try {
    const text = ctx.message.text;
    const loader = new Loader(ctx)

    await loader.show();

    if (!text.trim()) return ctx.reply('текст не должен быть пустым!')

    const response = await chatGPT(text);

    if (!response) return ctx.reply('ошибка ответа чата GPT')

    const notionResponse = await notionCreate(text, response.content);

    // const notionResponse = await notionCreate(text, "response.content");
    
    loader.hide();

    await ctx.reply(`Ваша страница: ${notionResponse.url}`);

  } catch(err) {
    console.log('ошибка работы с ноушеном: ', err.message)
  }
  //await chatGPT(ctx.message.text);
  // ctx.reply(chatGPT(ctx.message.text));
})

bot.launch()

