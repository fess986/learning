// работаем с инпутом через useRef. Версия через useState в этой же папке. Есть нюансы
import React, { useRef } from 'react';

interface FormTodoProps {
    onAdd(todo : string): void; 
}

const FormTodo = (props : FormTodoProps) : JSX.Element => {

    const ref = useRef<HTMLInputElement>(null);  // если сами не укажем HTMLInputElement, то value в поле ref.current - будет ругаться.
    
    const keyPressHandler = (evt : React.KeyboardEvent) => { 
        if (evt.key === 'Enter') {
            console.log(ref.current!.value);  // чтобы точно указать, о том что мы уверены, что ref.current существует, ставим восклицательный знак после этой записи
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
        
    }

    return (
        <div className='input-field mt2'>
            <input type="text" 
            ref={ref}
            onKeyDown={keyPressHandler}
            id='title'
            /* value={title} */
            placeholder='Введите название дела' />
            <label htmlFor="title" className='active' >Введите название дела</label>
        </div>
    )
}

export default FormTodo;