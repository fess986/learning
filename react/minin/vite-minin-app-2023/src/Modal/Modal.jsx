import "./Modal.css";
import { createPortal } from "react-dom";

export default function Modal({ children, open }) {
	return createPortal(
		<dialog open={open}>{children}</dialog>,
		document.getElementById('modal')
	);
}
