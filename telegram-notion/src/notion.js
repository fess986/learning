import { Client } from '@notionhq/client';
import config from 'config';

const notion = new Client({
  auth: config.get("NOTION_KEY")
})

export async function notionCreate(shortText, gptAnswer) {
  const response = await notion.pages.create({
    parent: {database_id: config.get("NOTION_DB_ID")},
    properties: {
      Name: {
        title: [
          {
            text: {
              content: shortText
            }
          }
        ]
      },
      Date: {
        date: {
          start: new Date().toISOString(),
        }
      }
    }
  })

  await notion.blocks.children.append({
    block_id: response.id, // обратились созданному нами респонсу
    children: [
      { 
      object: 'block',
      type: 'paragraph', // тут можно что угодно вплоть до аудио, но нам нужен именно текст
      paragraph: {
        rich_text: [  // обозначение для большого текста
          {
            type: "text",
            text: {
              content: gptAnswer,
            }
          }
        ]
      }
    }
      
    ]
  })

  return response;
}