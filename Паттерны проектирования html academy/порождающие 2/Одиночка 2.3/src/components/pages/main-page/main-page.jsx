import React from "react";
import { useEffect } from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import Singleton from "../../singleton/singleton.jsx";
import { keyframes } from "styled-components";

// const singleton = new Singleton();  // можно создать и тут и в самой функции

function MainPage({ features }) {

  const singleton = new Singleton();
  
  console.log(singleton);

  useEffect(() => {
    singleton.increment('main');

    console.log(singleton);
    console.log(singleton.getNumber()) // тут мы видим что юзэффект 
  }, [])

  return (
    <>
    {console.log(singleton.getNumber())}
      {(singleton.getNumber() > 4) && <h2>ass</h2>}
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
