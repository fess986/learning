import React, { useContext, useState } from "react";
import { SizeContext, SizeProvider } from "./size-context";

function SizeEditor({ children }) {
  const [addSize, setAddSize] = useState(0); // на сколько увеличить размер кнопок
  const buttonSize = useContext(SizeContext);
  const newButtonSize = {
    ...buttonSize,
    height: buttonSize.height + addSize,
    width: buttonSize.width + addSize
  };
  console.log(newButtonSize)
  console.log(addSize)

  return (
    <div>
      <SizeProvider value={newButtonSize}>{children}</SizeProvider>
      <div>
        <button type="button" onClick={() => setAddSize(addSize + 1)}>
          Увеличить размер кнопок
        </button>
      </div>
    </div>
  );
}

export default SizeEditor;
