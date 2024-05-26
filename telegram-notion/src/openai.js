import config from "config";
import OpenAI from "openai";

const openai = new OpenAI({
	apiKey: config.get("OPEN_AI"), // defaults to process.env["OPENAI_API_KEY"]
});

const MODEL = "gpt-3.5-turbo";
const ROLE = {
	USER: "user",
	ASSISTANT: "assistant",
	SYSTEM: "system",
};

const getMessages = (mess) => `
Напиши на основе этих тезисов последовательную эмоцианальную историю: ${mess}

эти тезисы - ключевые моменты дня.
В итоге нужно получить такую историю на их основе, чтобы она была интересной и я запомнил этот день и мог бы рассказать её друзьям. Нужно не больше 100 слов. Главное чтобы она была эмоцианальной, правильной последовательности + учтение контекста
`;

export async function chatGPT(message = "") {
	const messages = [
		{
			role: ROLE.SYSTEM,
			content:
				"ты опытный копирайтер, которые пишет краткие эмоцианальные статьи для соц сетей", // промпт-инжиниринг - искусство создавать правильные запросы чату
		},
		{
			role: ROLE.USER,
			content: getMessages(message),
		},
	]; // [{ role: 'user', content: 'Say this is a test' }]

	try {
		const completion = await openai.chat.completions.create({
			messages: messages,
			model: MODEL,
		});

		console.log(completion.choices[0].message);

		return completion.choices[0].message;
	} catch (err) {
		console.log("ошибка ответа от чата: ", err.message);
	}
}

