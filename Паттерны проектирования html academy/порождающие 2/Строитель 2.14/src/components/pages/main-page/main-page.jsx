import React from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import { PageBuilder } from "../builders/page-builder";

function MainPage({ features }) {
  // return (
  //   <>
  //     <About />
  //     <FeaturesList features={features} />
  //   </>
  // );
  return PageBuilder.setPromo('ass123').renderForm((text) => {  // сначала добавляем прома, а потом рендерим страницу
    return (  // обязательно возвращаем её
    <>
      {text}  
      <About />
      <FeaturesList features={features} />
    </>
    ) 
  })
}

export default MainPage;
