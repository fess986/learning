import express from 'express';
import { engine } from 'express-handlebars';
import config from 'config';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey : config.get('OPENAI_KEY'),
});

const openai = new OpenAIApi(configuration);

const app = express();

app.engine('handlebars', engine());  // устанавливаем препроцессор Handlebars как движок для отображения страниц.
app.set('view engine', 'handlebars');  // указываем, что используется движок для отображения страниц Handlebars
app.set('views', './views'); // указываем путь к директории с шаблонами Handlebars
app.use(express.urlencoded({extended: true})) // настраиваем парсер для данных формы (BodyParser или Express) на приложение Express, который понимает закодированные данные формы.

app.get('/', (_, response) => {  // обрабатываем гет запрос на сервер. При запросе на корень, мы запускаем коллбык с реквест-респонсом(реквест тут не используется)
  response.render('index1') // в объекте ответа рендерим файл индекса, откуда его брать - взято в настройках выше
})

app.post('/', async (req, res) => {
  const prompt = req.body.prompt;
  const size = req.body.size ?? '512x512';
  const number = req.body.number ?? 1;

  console.log(prompt, size, number);

  // res.render('index1');

  try {
    const response = await openai.createImage({
      prompt,
      size,
      n: Number(number),
    });

    res.render('index1', {
      images: response.data.data, // передаем на рендер и добавляем объект images к нему для дальнейшей обработке
    }); // чтобы обратно ее получить

  } catch(err) {
    console.log('Ошибка генерации картинки', err.message)
    res.render('index1', {
      error: err.message,
    })
  }

})

app.listen(3000, () => console.log('Server is started'));