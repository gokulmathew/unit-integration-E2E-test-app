import { useState } from "react";

function useInput(defaultValue) {
  const [value, setValue] = useState(defaultValue);
  return {
    value,
    setValue,
    onChange: (e) => setValue(e.target.value),
  };
}

export default useInput;
