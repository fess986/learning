const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const expHandlebars = require("express-handlebars");
const todoRoutes = require("./roures/todos");

const PORT = process.env.PORT || 3000;

const app = express();

const hbs = expHandlebars.create({
	defaultLayout: "main",  
	extname: "hbs",  // extname - расширение шаблонов вместо дефолтного handlebars
});

app.use(express.urlencoded({extended: true}));  // для обработки форм входящих данных
app.use(express.static(path.join(__dirname, "public")));  // для обработки статических файлов в папке public чтобы handlebars понимал абсолютный путь к файлам, такой как public/index.css

app.engine("hbs", hbs.engine); // регистрируем движок hbs.engine в express для дальнейшего использования по ключу hbs (значение должно быть таким)

app.set("view engine", "hbs"); // устанавливаем дефолтный движок в express при помощи специального ключа view engine(обязательно должен быть таким)
app.set("views", "views"); // устанавливаем папку с шаблонами в express при помощи ключа views(обязательно должен быть таким)

app.use(todoRoutes);

async function start() {
	try {
		// await mongoose.connect("mongodb+srv://fess986:si8CK6O2ZY93ZSh4@cluster0.xmslhrd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
		await mongoose.connect("mongodb+srv://fess986:si8CK6O2ZY93ZSh4@cluster0.xmslhrd.mongodb.net/todos", {
			// useNewUrlParser: true,  // данные опции использовались в старых версиях, сейчас они не нужны
      // useUnifiedTopology: true,
      // useCreateIndex: true,
		});

		app.listen(PORT, () => {
			console.log("Server has been started...");
		});
	} catch (error) {
		console.log("error starting server - ", error.message);
	}
}

start();
