import ButtonContext from "./ButtonContext/ButtonContext";

export default function TabsSection( {onClick, currentPage} ) {
  return (
    <>
      <ButtonContext isActive={currentPage === 'main'} onClick1={() => onClick('main')}>Переключатель на главную</ButtonContext>
      <ButtonContext isActive={currentPage === 'feedback1'} onClick1={() => onClick('feedback1')}>Переключатель формы стейты-примитивы</ButtonContext>
      <ButtonContext isActive={currentPage === 'feedback2'} onClick1={() => onClick('feedback2')}>Переключатель формы стейт-объект</ButtonContext>
      <ButtonContext isActive={currentPage === 'feedbackRef'} onClick1={() => onClick('feedbackRef')}>Переключатель формы-рефы</ButtonContext>
      <ButtonContext isActive={currentPage === 'effects'} onClick1={() => onClick('effects')}>Эффекты</ButtonContext>

    </>
  )
} 