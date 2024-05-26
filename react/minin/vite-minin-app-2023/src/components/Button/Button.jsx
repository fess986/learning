import './Button.css'

export default function Button( {children, onClick1} ) {  // children - зарезервированное слово для потомков jsx-тега, мы не можем изменить это название

  console.log('Button - rendered')

  // function clickHandler1() { // если хендлер в самом компоненте, но у нас он передаётся извне
  //   console.log('ass')
  // }

  // return <button className="button1" onClick={onClick1} onDoubleClick={function ass() {console.log('double')} } >{children}</button>  // можно сколько угодно обработчиков навешивать. Так же можно коллбек в виде стрелочной функции прописат
  return <button className="button1" onClick={(evt) => {
    console.log('можем оперировать ивентом, а вызвать функцию с чем захотим', evt)
    onClick1('Передаём тока функцию, а параметры вызова пишем внутри')
  }} onDoubleClick={function ass() {console.log('double')} } >{children}</button>  // можно сколько угодно обработчиков навешивать. Так же можно коллбек в виде стрелочной функции прописат
}