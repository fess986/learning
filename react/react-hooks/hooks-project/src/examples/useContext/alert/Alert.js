import React from "react";
import { useAlert } from "./AlertContext";
// import { useToggleContext } from "./AlertContext";



export default function Alert() {
    
    const alert = useAlert()   // кидаем значение контекста в переменную

    if (!alert.visible) return null;  // 

    return (
            <div className="alert">
                Это очень важное сообщение
            </div>
    )
}