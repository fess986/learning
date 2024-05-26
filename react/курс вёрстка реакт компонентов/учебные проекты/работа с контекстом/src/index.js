import React, { useContext } from "react";
import { createRoot } from "react-dom/client";
import { SizeContext } from "./size-context";
import SizeEditor from "./size-editor";

function BuyButton() {
  const size = useContext(SizeContext);

  const cb1 = (event, prop2) => {
    console.log(event) // evt
    console.log(prop2) // ass
  }

  const cb2 = (event) => {
    console.log(event)  // evt
  }

  const cb3 = (prop) => {
    console.log(prop)  // ass2
  }

  // return (
  //   <button type="button" style={size} onClick={(evt) => cb1(evt, 'ass')}>
  //     Купить
  //   </button>
  // );

  // return (
  //   <button type="button" style={size} onClick={cb2}>
  //     Купить
  //   </button>
  // );

  return (
    <button type="button" style={size} onClick={() => cb3('ass2')}>
      Купить
    </button>
  );


}

function CancelButton() {
  const size = useContext(SizeContext);
  return (
    <button type="button" style={size}>
      Отмена
    </button>
  );
}
function Wrapper({ children }) {
  return <div>{children}</div>;
}

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(
  <>
    <BuyButton />
    <SizeEditor>
      <BuyButton />
      <Wrapper>
        <CancelButton />
        <BuyButton />
      </Wrapper>
    </SizeEditor>
  </>
);
