import { useState } from "react";

export const useCounter = (init: number) => {
  const [value, setValue] = useState(init);

  const inc = (num: number = 1) => {
    setValue(value + num);
  };

  const dec = (num: number = 1) => {
    setValue(value - num);
  };

  const set = (num: number) => {
    setValue(num);
  };

  return { value, inc, dec, set };
};