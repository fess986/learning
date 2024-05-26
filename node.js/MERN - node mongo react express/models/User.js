const { Schema, Types, model } = require('mongoose');

// создаём модель User к которой потом будем подключаться. Более подробно поля описаны в Link.js
const schema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  links: [{type: Types.ObjectId, ref: 'Link'}],  // ref: 'link'-  перекрестная ссылка на коллекцию Link
})

module.exports = model('User', schema)