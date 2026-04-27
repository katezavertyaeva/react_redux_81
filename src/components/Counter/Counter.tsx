import Button from "../Button/Button";
import { CounterWrapper, ButtonWrapper, Result } from "./styles";
// 9. Импортируем хуки для диспатча и получения данных
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// 10. Импортируем экшены селексторы из файла со слайсом
import { counterActions, counterSelectors } from "../../redux/slices/counter/counterSlice";

function Counter() {
  // 11. Получаем функцию dispatch
  const dispatch = useAppDispatch();

  // 12. Забираем значение из глобального стейта
  const counter = useAppSelector(counterSelectors.counterValue);

  const onCounterMinus = (): void => {
    dispatch(counterActions.minus())
  };
  const onCounterPlus = (): void => {
    dispatch(counterActions.plus())
  };

  // const onCounterClear = (): void => {
  //   setCounter(0);
  // };

  return (
    <CounterWrapper>
      <ButtonWrapper>
        <Button name="-" onButtonClick={onCounterMinus} />
      </ButtonWrapper>
      <Result>{counter}</Result>
      <ButtonWrapper>
        <Button name="+" onButtonClick={onCounterPlus} />
      </ButtonWrapper>
      {/* <ButtonWrapper>
        <Button name="Clear" onButtonClick={onCounterClear} />
      </ButtonWrapper> */}
    </CounterWrapper>
  );
}

export default Counter;
