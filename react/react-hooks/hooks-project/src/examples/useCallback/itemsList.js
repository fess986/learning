import React from "react";

export default function ItemList({getItems}) {

    const [item, setItem] = React.useState([])
    
    React.useEffect(() => {
        const newItem = getItems(42);
        console.log('Rerender')
        return setItem(newItem)  // return - как по мне не обязателен
    }, [getItems])

    return (
        <ul>
            {item.map((value) => {
                return <li key={value}>{value}</li>
            })}
        </ul>
    )
}