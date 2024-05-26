// подключение к службе Auth0. При включении проверяется подключение к ресурсу
// по пути /login - попадаем на страницу регистрации
// по пути /logout - разлогинимся
const express = require('express');
require('dotenv').config();  // храним тут переменные

const app = express();
const port = process.env.PORT || 3000;

const { auth } = require('express-openid-connect');  // подключение к службе Auth0 / 

app.use(
  auth({

    authRequired: false,
    auth0Logout: true,

    issuerBaseURL: process.env.ISSUER_BASE_URL,
    baseURL: process.env.BASE_URL,
    clientID: process.env.CLIENT_ID,
    secret: process.env.SECRET,
    idpLogout: true,
  })
);

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.listen(port, () => {
  console.log(`слушает порт ${port}`);
});
