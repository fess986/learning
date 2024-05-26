import React, {useState, useMemo, useEffect} from "react";
import "./App.css";

const longComputed = (num) => {  // тяжёлые вычисления
  let i = 1;
  while (i<1000000000) i++
  return num * 2
}

function App() {

  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false)

  const styles = useMemo(() => ({   // кэшируем состояние объекта
    color: colored ? 'blue' : 'red'
}) , [colored])
   


  const computed = useMemo(() => {   //  говорим запускать код внутри - только при изменении параметра [number]. В остальных случаях, сложный код не запускается
    return longComputed(number)
  }, [number]);

    useEffect(() => {  // если стили не закэшировать через useMemo, то при каждом ререндеренге будет запускаться, так как это объект(ссылка) и на каждой итерации он будет запускаться
      console.log('смена стилей')
    }, [styles])
  
  return (
    <div>
      <h1 style={styles}>Счётчик через useState: {computed} </h1>
      <button className='btn' onClick={() => setNumber(prev => prev + 1)}>Добавить</button>
      <button className='btn' onClick={() => setNumber(prev => prev - 1)}>Вычесть</button>
      <button className='btn' onClick={() => setColored(prev => !prev)}>сменить цвет</button>
    </div>
  );
}

export default App;
