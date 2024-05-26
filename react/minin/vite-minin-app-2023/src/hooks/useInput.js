import { useState } from "react";


export default function useInput(filter) {
  const [value,setValue] = useState(filter)

  return {
    value,
    onChange : (evt) => setValue(evt.target.value)
  }

}