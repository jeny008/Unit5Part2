import { useState } from 'react';

export const useList = (init: number[]) => {
  let [list, setList] = useState(init);

  const push = () => {
    if (list.length === 0) {
      setList([1]);
    } else {
      let tempList: number[] = [...list];
      tempList.push(list.length + 1);
      setList(tempList);
    }
  };

  const pop = () => {
    let tempList: number[] = [...list];
    tempList.pop();
    setList(tempList);
  };

  const clear = () => {
    setList([]);
  };

  const reset = () => {
    setList(init);
  };

  const map = (el: any) => {
    // console.log(el)
    let tempList: number[] = [...list];
    let num: number[] = tempList.map((el) => el * 2);
    // console.log(r)
    setList(num);
  };

  return [list, { push, pop, clear, reset, map }];
};
