import { useCallback } from "react";

export default function useErrorMessage() {
  return useCallback(text => {
    if (window.M && text) {  // window.M - это объект который мы получаем когда подключаем библиотеку materialize к проекту
      window.M.toast({html: text})  // window.M.toast - отображение всплывающей подсказки
    }
  }, [])
}