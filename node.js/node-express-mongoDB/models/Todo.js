const {Schema, model} = require("mongoose");

// создаем схему для работы с данными
const todoSchema = new Schema({
  title: {  // поле title
    type: String,  // тип данных
    required: true,  // обязательное поле
  },
  completed: {  // поле completed
    type: Boolean,  // тип данных
    default: false,  // значение по умолчанию
  },
});

module.exports = model("Todo", todoSchema);  // экспортируем модель для использования в других файлах