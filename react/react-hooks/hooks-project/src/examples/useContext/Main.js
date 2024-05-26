import React from "react";
import { useAlert } from "./alert/AlertContext";

export default function Main() {

    const { toggleAlert1 }  = useAlert();

    return (   //  за каким то фигом нужно весь компонент обернуть в <>. наверное чтобы показать что это одна сущность
        <>  
            <h1>Это компонент Main</h1>
            <button onClick={() => { toggleAlert1() }} >Показыть alert</button>
        </>
    )
}