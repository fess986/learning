import { useState, useEffect } from "react";

export function TimeService() {
  const [pull, setPull] = useState({ass: 'ass'});

  const getTimeStartSession = () => {
    const newTimeMinutes = new Date().getMinutes();
    const newTimeSeconds = new Date().getSeconds();
    const newTimeStart = {
      FIRST_TIME: `${newTimeMinutes} minutes ${newTimeSeconds} seconds`,
    }
    setPull(newTimeStart);
  }

  useEffect(() => {  
    console.log('запускаюсь без всего') // запускается каждый раз при какой то движухе 
    return console.log('выход без всего') // запускается каждый раз при ререндеринге
  })

  useEffect(() => {  
    console.log('запускаюсь с пустыми зависимостями') // запускается только ОДИН раз при старте, некоторые данные даже не прогрузилися
    return console.log('выход с пустыми зависимостями') // хз когда запускается вообще
  }, [])

  useEffect(() => {  // запускается при изменении объекта pull
    console.log('в зависимостях - pull')
    !pull.FIRST_TIME && getTimeStartSession();
    console.log(pull)
    return () => {
      console.log('выход в зависимостях - pull')
      if (!pull.LAST_TIME) {
        pull.LAST_TIME = new Date().getMinutes();
      }

      let newStatePull = JSON.parse(JSON.stringify(pull)); // клонирование объекта с созданием новой ссылки
      setPull(newStatePull);
    }
    // function leavePage() {
      
    // }
    
  }, [pull])
  

  return (
    <div>
      Время первого захода на страницу
      <br />В {pull?.FIRST_TIME} 
      <br />Время первого ухода со страницы
      <br />В {pull?.LAST_TIME} секунд
    </div>
  )
}
