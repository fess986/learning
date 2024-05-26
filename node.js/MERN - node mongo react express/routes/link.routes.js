const { Router } = require("express");
const Link = require("../models/Link");
const config = require("config");
const shortid = require("shortid");
const auth = require("../middleware/auth.middleware");
const router = Router();

router.post("/generate", auth, async (req, res) => {
	try {
		const baseUrl = config.get("baseUrl");
		const { from } = req.body; // получаем ссылку из запроса

		const code = shortid.generate();

		const existing = await Link.findOne({ from }); // ищем в базе уже существующую запись

		if (existing) {
			return res.json({ link: existing }); // если находим в базе сущ-юю то просто её возвращаем на фронт
		}

    const to = baseUrl + '/t/' + code

		const link = new Link({
			code,
			to,
			from,
			owner: req.user.userId,
		});

    await link.save()  // сохраняем ссылку в базе, по итогу возвращается промис, поэтому мы его ждём

    return res.json({link})
	} catch (err) {
		// отвечаем серверной ошибкой 500 и сообщением ошибки
		res
			.status(500)
			.json({ message: "ошибка сервера при запросе post/generate!" });
	}
});

router.get("/", auth, async (req, res) => {
	console.log('мы тута')
	// просто подключаем mw auth, который работает с токеном
	try {
		console.log(req.user.userId)
		const links = await Link.find({ owner: req.user.userId }); // поле req.user - было передано из mw auth - и содержит объект jwt- токена, поэтому мы можем обратиться к его полю userId
		console.log(links)
		res.json(links);
	} catch (err) {
		// отвечаем серверной ошибкой 500 и сообщением ошибки
		res.status(500).json({ message: "ошибка сервера при запросе get/!" });
	}
});

router.get("/:id", auth, async (req, res) => {
	try {
		const link = await Link.findById(req.params.id);
		res.json(link);
	} catch (err) {
		// отвечаем серверной ошибкой 500 и сообщением ошибки
		res.status(500).json({ message: "ошибка сервера при запросе get/:id!" });
	}
});

module.exports = router;
