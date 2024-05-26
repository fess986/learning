export class Loader {

	constructor(ctx) {
		this.ctx = ctx;
	}

	icons = ["🕛", "🕑", "🕒", "🕓", "🕕", "🕖", "🕘", "🕙"];
  message = null;
  interval = null;

	async show() {
    let index = 0;
    this.message = await this.ctx.reply(this.icons[index])

    this.interval = setInterval(() => {
      index = this.icons.length - 1 <= index ? 0 : index + 1;
      // index = index < this.icons.length - 1 ? index + 1 : 0
      console.log(index);

      this.ctx.telegram.editMessageText( // метод который позволяет менять сообщение, которое уже существует в чате телеграмма
        this.ctx.chat.id, // чат в котором мы работаем
        this.message.message_id, // сообщение которое мы хотим поменять
        null,
        this.icons[index]
      )

    }, 500)
  }

	hide() {
    clearInterval(this.interval);
    this.ctx.telegram.deleteMessage(this.ctx.chat.id, this.message.message_id);
  }
}
