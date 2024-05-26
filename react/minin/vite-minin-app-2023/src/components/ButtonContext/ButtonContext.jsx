import classes from './ButtonContext.module.css'

console.log(classes)

// в  ...props - мы складываем все нестандартные параметры, потом мы можем их развернуть, не прописывая тут лишние вещи
export default function ButtonContext( {children, onClick1, isActive, ...props} ) {  
  console.log('ButtonContext - rendered')

  let classesActive = classes.button_context;
  if (isActive) classesActive += ` ${classes.button_context__active}`;

  // return <button className={isActive ? "button-context button-context--active" : 'button-context' } onClick={onClick1} onDoubleClick={function ass() {console.log('double')} } >{children}</button>  
  return <button className={ classesActive } onClick={onClick1} onDoubleClick={function ass() {console.log('double')}  } {...props} >{children}</button>  
}