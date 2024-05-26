export default function LinkCard({link}) {

  return (
    <>
      <h2>Ссылка</h2>

      <p>Ваша ссылка: <a href={link.to} rel="noreferrer noopener" target="_blank">{link.to}</a></p>
      {/* `noreferrer`: Этот атрибут указывает браузеру не отправлять HTTP Referer заголовок при переходе по ссылке. Это помогает защитить приватность пользователя, не передавая информацию о предыдущей странице, с которой была осуществлена переадресация. */}
      {/* - `noopener`: Этот атрибут предотвращает, чтобы новая страница, открытая по ссылке, могла изменить или взаимодействовать с оригинальной страницей. Это помогает предотвратить возможные атаки типа "window.opener" или перенаправления на другие страницы без вашего согласия. */}
      <p>Откуда: <a href={link.from} rel="noreferrer noopener" target="_blank">{link.from}</a></p>
      <p>Количество кликов по ссылке: <strong>{link.clicks}</strong></p>
      <p>Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong></p>
    </>
  )
}