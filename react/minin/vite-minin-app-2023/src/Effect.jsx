import { useState } from "react"
import Modal from "./Modal/Modal"

import ButtonContext from "./components/ButtonContext/ButtonContext"
import ModalRef from "./components/ModalRef/ModalRef";


export default function EffectSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalRefOpen, setIsModalRefOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  const toggleModalRef = () => {
    setIsModalRefOpen(!isModalRefOpen)
  }

  return (
    <section>
      <h3>Effects Section</h3>
      <ButtonContext onClick1={toggleModal}>{isModalOpen ? 'Закрыть модалку' : 'Открыть модалку'}</ButtonContext>
      <Modal open={isModalOpen}>
        <h3>Modal window</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestiae neque eligendi nostrum ab ipsum perferendis, in dolores, numquam nobis exercitationem libero consectetur cupiditate repudiandae placeat, minus ratione. Impedit, ipsa?</p>
        <ButtonContext onClick1={toggleModal}>{isModalOpen ? 'Закрыть модалку Ref' : 'Открыть модалку Ref'}</ButtonContext>
      </Modal>

      <ButtonContext onClick1={toggleModalRef}>{isModalOpen ? 'Закрыть модалку Ref' : 'Открыть модалку Ref'}</ButtonContext>

      <ModalRef open={isModalRefOpen}>
        <h3>Modal window123</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id molestiae neque eligendi nostrum ab ipsum perferendis, in dolores, numquam nobis exercitationem libero consectetur cupiditate repudiandae placeat, minus ratione. Impedit, ipsa?</p>
        <ButtonContext onClick1={toggleModalRef}>{isModalRefOpen ? 'Закрыть модалку Ref' : 'Открыть модалку Ref'}</ButtonContext>
      </ModalRef>

    </section>
  )
}