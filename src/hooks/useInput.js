import { useCallback, useState } from "react";

function useInput(v) {
  const [value, setValue] = useState(v);
  const valueChange = useCallback((e) => {
    setValue(e.currentTarget.value);
  }, []);

  return [value, valueChange];
}

export default useInput;
