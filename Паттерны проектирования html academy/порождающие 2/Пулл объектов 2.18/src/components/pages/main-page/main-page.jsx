import React from "react";
import About from "/src/components/blocks/about/about";
import FeaturesList from "/src/components/blocks/features-list/features-list";
import { TimeService } from "../../time-servise/timeServise";

function MainPage({ features }) {
  return (
    <>
      <TimeService />
      <About />
      <FeaturesList features={features} />
    </>
  );
}

export default MainPage;
