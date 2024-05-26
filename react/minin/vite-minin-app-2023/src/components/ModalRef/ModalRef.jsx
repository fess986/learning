import { useRef } from "react";
import "./ModalRef.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export default function ModalRef({ children, open }) {

	const dialog = useRef() // объявнять в useEffect-е нельзя

	// useEffect работает уже после построение дерева и в dialog.current - уже будет находиться требуемый элемент, поэтому мы можем обращаться к его методам
	useEffect(() => {

		if (open) {
			dialog.current.showModal()  // это метод ДОМ-элемента тега dialog - можно посмотреть в mdn какие теги есть у тегов
		} else {
			dialog.current.close();
		}
	}, [open])

	// без зависимостей тоже будет работать, так как метод будет вызываться каждый раз
	// useEffect(() => {

	// 	if (open) {
	// 		dialog.current.showModal()
	// 	} else {
	// 		dialog.current.close();
	// 	}
	// })

	return createPortal(
		<dialog ref={dialog}>{children}</dialog>,
		document.getElementById('modal')
	);
}