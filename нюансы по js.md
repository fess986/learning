КЛАССЫ

1) методы, созданные при помощи ключевого слова static - являются внутренними методами класса. То есть их можно вызывать без создания класса через new. Нюансы :
- вызов происходит через НАЗВАНИЕ_КЛАССА.Метод()
- другие методы класса (и обычные и статические) могут вызывать этот метод так же как и остальные сущности через НАЗВАНИЕ_КЛАССА.Метод()
- так как он работает без создания инстанса класса, в нем нет полей, которые создает конструктор через this , поэтому внутри него нельзя обращаться к this !!!