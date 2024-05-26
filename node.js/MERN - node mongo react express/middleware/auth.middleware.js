// добавим эту mw потом в link.routes  для идентификации токена при запросе
const jwt = require("jsonwebtoken")
const config = require('config')

module.exports = (req, res, next) => {  // экспортируем типичную mw-функцию
  if (req.method === "OPTIONS") {  // метод АПИ OPTIONS - специальный для проверки доступности сервера. Ничего не делаем
    return next()  // сразу запускаем следущую mw
  }

  try {
    const token = req.headers.authorization.split(' ')[1]   // req.headers.authorization - то что передаёт в хедерах фронт для авторизации. Представляет из себя строку "Baerer TOKEN", поэтому мы просто достаём оттуда TOKEN

    if (!token) {
      return res.status(401).json( {message: 'нет авторизации с сервера'} )  // 401 - нет авторизации. return - для того чтобы код дальше не выполнился
    }

    const decodedToken = jwt.decode(token, config.get("jwtSecret"))  // передаём токен и ключ для декодинга - по итогу получаем объект пользователя с айдишником в поле userId
    // console.log('декодировано..............................')
    // console.log(decodedToken)
    req.user = decodedToken  // помещаем токен в объект запроса
    next()
  } catch(err) {
    res.status(401).json( {message: 'нет авторизации с сервера'} )
  }
}