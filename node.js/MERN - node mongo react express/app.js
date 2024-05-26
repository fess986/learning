const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');

const app = express();
const PORT = config.get('port') || 5000;

app.use(express.json({ extended: true })) // изначально в бэке всё прилетает в виде стримов, для того чтобы вместо этого получать обычный JSON-объект - добавляем данный mw

app.use('/api/auth', authRoutes)  // создаём запрос, который обязательно должен начинаться с /api - и используем в нём роут router из модуля auth.routes, который был экспортирован по умолчанию, так что можно не создавать отдельную переменную под него.
app.use('/api/link', require('./routes/link.routes')) 

const start = async function() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      // useNewUrlParser: true,  // данные опции использовались в старых версиях, сейчас они не нужны
      // useUnifiedTopology: true,
      // useCreateIndex: true,
    })
    app.listen(PORT, () => console.log(`server opened on port ${PORT}`));

  } catch(err) {
    console.log('mongo error - ', err.message);
    process.exit(1); // завершаем приложение
  }
}

start();


