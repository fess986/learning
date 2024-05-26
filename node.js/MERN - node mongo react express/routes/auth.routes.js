const { Router } = require("express");
const bcrypt = require("bcryptjs"); // пакет для шифрования данных, в нашем случае паролей
const { check, validationResult } = require("express-validator"); // валидация данных на сервере
const jwt = require("jsonwebtoken");
const config = require('config')

const User = require("../models/User"); // подключаем модель

const router = Router(); // создаём роутер ***

// создаём энд-поинты
// обрабатываем пост-запрос. Префикс запроса указан в app.use('/api/auth'... - это означает, что в данном случае будет обработан запрос /api/auth/register
router.post(
	"/register",  // должен начинаться со слэша
	// перед запуском функции мы добавляем массив mw, в данном случае для проверки данных мэйла и пароля
	[
		check("email", "Неправильный адрес email").isEmail(),
		check("password", "Пароль должен быть не короче 6 символов").isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		try {
			console.log('Body server - ', req.body)
			
			const errors = validationResult(req); // вызываем валидацию и в массив errors складываем ошибки

			// если в массиве ошибок что то есть то сразу передадим их на фронт - точнее в хук http.hook.js - который сохранит и передаст ошибку дальше
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(), // массив ошибок
					message: "ошибка при регистрации пользователя",
				});
			}

			const { email, password } = req.body;

			// все работы с базой совершаем асинхронно через await
			const candidate = await User.findOne({ email: email }); // ищем в базе, есть ли запись с полем email, равное новому email

			// осуществляем проверку, существует ли такой пользователь, и если да, то выходим через return со статусом 400
			if (candidate) {
				return res
					.status(400)
					.json({ message: "Такой пользователь уже существует" });
			}

			const hashPass = await bcrypt.hash(password, 12); // шифруем пароль
			const user = new User({ email, password: hashPass }); // создаём запись с нашим email и хешированным паролем

			await user.save(); // ждём когда запишется в базу

			res.status(201).json({ message: "Пользователь создан" });
		} catch (err) {
			// отвечаем серверной ошибкой 500 и сообщением ошибки
			res.status(500).json({ message: "ошибка сервера при запросе register" });
		}
	}
);

// обработка логина
router.post(
	"/login",
	[
		check("email", "Введите корректный email").normalizeEmail().isEmail(),
		// check("password", "Введите пароль").exists(), // эта проверка не работает
		check("password", "Введите пароль").isLength({
			min: 1,
		}),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req); // вызываем валидацию и в массив errors складываем ошибки

			// если в массиве ошибок что то есть то сразу передадим их на фронт
			if (!errors.isEmpty()) {
				return res.status(400).json({
					errors: errors.array(), // массив ошибок
					message: "ошибка при авторизации пользователя",
				});
			}

			const { email, password } = req.body;

			const user = await User.findOne({ email: email }); // в user попадает объект, содержащий поля пользователя

			if (!user) {
				return res.status(400).json({ message: "Пользователь не найден" });
			}

			const isMatch = await bcrypt.compare(password, user.password); // проверяем соответствие пароля который прилетел с фронта и пароля, который содержится в базе. Делаем это через bcrypt.compare, так как в базе пароли зашифрованы

			if (!isMatch) {
				return res
					.status(400)
					.json({ message: "Неправильный пароль, попробуйте снова" });
			}
			
			// если мы дошли до сюда, значит у нас есть user

      // при помощи библиотеки jwt создаём секретный токен
      const token = jwt.sign( // метод принимает 3 параметра
        { userId: user.id },  // айдишник
        config.get('jwtSecret'),  // ключ шифрования
        {expiresIn: '1h'}  // время жизни токена - 1 час
      )

      // по умолчанию у res - статус 200, так что можно его не прописывать, если такой и нужен
      res.json({token, userId: user.id});

		} catch (err) {
			// отвечаем серверной ошибкой 500 и сообщением ошибки
			res.status(500).json({ message: "ошибка сервера при запросе register!" });
		}
	}
);

module.exports = router; // экспортируем роутер
