import { useState } from "react";

import Button from "../Button/Button";
import { CounterWrapper, ButtonWrapper, Result } from "./styles";

function Counter() {
  // type ArrayType<T> = T[];
  // numbers:ArrayType<number>  = [3, 4, 5] --> number[]
  const [counter, setCounter] = useState<number>(0);

  const onCounterMinus = (): void => {
    setCounter((prevState) => prevState - 1);
  };
  const onCounterPlus = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  const onCounterClear = (): void => {
    setCounter(0);
  };

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" onButtonClick={onCounterMinus} />
      </ButtonWrapper>
      <Result>{counter}</Result>
      <ButtonWrapper>
        <Button name="+" onButtonClick={onCounterPlus} />
      </ButtonWrapper>
      <ButtonWrapper>
        <Button name="Clear" onButtonClick={onCounterClear} />
      </ButtonWrapper>
    </CounterWrapper>
  );
}

export default Counter;
