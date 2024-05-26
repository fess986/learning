// работаем с инпутом через useState
import React, { useState } from 'react';

const FormTodo1 = () : JSX.Element => {
    const [title, setTitle] = useState<string>('123');  // если ничего не прописываем для useState то он сам выводит тип, так как он по сути является дженериком. Можно прочитать его описание, наведя на useState в импорте

    // React.ChangeEvent - это основной тип эвента. По умолчанию в дженерике стоит тип T = Element, то есть любой элемент. Поэтому, если мы не уточняем то, что он HTMLInputElement, TS будет ругаться на то, что не у всех элементов присутствует поле value.
    const changeHandler = (evt : React.ChangeEvent<HTMLInputElement>) => { 
        setTitle(evt.target.value);
    }

    const keyPressHandler = (evt : React.KeyboardEvent) => { 
        if (evt.key === 'Enter') {
            setTitle('')
        }
        
    }

    return (
        <div className='input-field mt2'>
            <input type="text" 
            onChange={changeHandler}
            onKeyDown={keyPressHandler}
            id='title'
            value={title}
            placeholder='Введите название дела' />
            <label htmlFor="title" className='active' >Введите название дела</label>
        </div>
    )
}

// default FormTodo;