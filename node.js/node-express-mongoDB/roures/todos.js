const {Router} = require("express");  // создаем роутер для работы с маршрутами
const Todo = require("../models/Todo");  // подключаем модель для работы с данными

const router = Router(); // создаем экземпляр роутера

router.get("/", async (req, res) => {  // обрабатываем маршрут "/"

  const todos = await Todo.find();  // получаем все задачи из базы данных

  // из-за ограничений handlebars - он не хочет работать напрямую с моделями из-за настроек безопасности, поэтому преобразуем данные в собственный массив с необходимыми данными 
  const sanitizedTodos = todos.map(todo => ({
    _id: todo._id.toString(),
    title: todo.title,
    completed: todo.completed
  }));

  res.render("index", {title: "Todos", isMain: true, todos : sanitizedTodos});  // выводим шаблон index.hbs,при этом мы передаём в шаблон переменную title со значением Todos, чтобы в шаблоне был доступ к ней
})

router.get("/create", (req, res) => {  // обрабатываем маршрут "/create"
  res.render("create", {title: "Create Todo", isCreate: true});  // выводим шаблон create.hbs
})

router.post("/create", async (req, res) => {  // обрабатываем маршрут "/create"

  console.log(req.body);

  const todo = new Todo({  // создаем новую задачу через модель
    title: req.body.title,  // берём данные из тела запроса - значение поля input у которого идет name="title"
    // completed: false
  });

  await todo.save();  // сохраняем задачу в базу данных

  res.redirect("/");  // перенаправляем пользователя на главную страницу
})

router.post("/complete", async (req, res) => {  // обрабатываем маршрут "/complete"
const currentTodo = await Todo.findOne({_id: req.body.id});  // получаем задачу из базы данных по id
console.log(currentTodo);

currentTodo.completed = !!req.body.completed;  // меняем значение на текущее состояние чекбокса которое прилетает из формы
await currentTodo.save();  // сохраняем задачу в базу данных

res.redirect("/");
})

module.exports = router; // экспортируем роутер для вызова в других файлов