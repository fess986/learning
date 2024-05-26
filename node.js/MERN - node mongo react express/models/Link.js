const { Schema, Types, model } = require('mongoose');

// создаём модель Link к которой потом будем подключаться. 
const schema = new Schema({
  from: {type: String, required: true},  // required: true - необходимое поле
  to: {type: String, required: true, unique: true}, // unique: true - уникальное поле
  code: {type: String, required: true, unique: true},
  date: {type: Date, default: Date.now},  // default: Date.now - значение по умолчанию, вызов при этом не осуществляется
  clicks: {type: Number, default: 0},  
  owner: {type: Schema.Types.ObjectId, ref: 'User'}  // ref: 'link'-  перекрестная ссылка на коллекцию User - название должно совпадать с именем выгруженной коллекции. Передавать сюда нужно id пользователя, которому принадлежит ссылка
})

module.exports = model('Link', schema) // название коллекции