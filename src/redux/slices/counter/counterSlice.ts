// 1. Импортируем функцию, с помощью которой будем создавать slice
import { createAppSlice } from "../../createAppSlice"
import { CounterState } from "./types"

// 4.2 Создаём начальное состояние
const counterInitialState: CounterState = {
  count: 0,
}

// 2. Создайм slice для каунтера с помощью вызова функции createAppSlice, в качестве
//  атрибута передаём в функцию объект настройки
export const counterSlice = createAppSlice({
  // 3. Cоздаём имя, под которым будет храниться объект со значением каунтера (state)
  // Стейт для отдельных частей данных всегда представляет собой объект!
  name: "COUNTER",
  // 4.1 Передаём объект, который будет являться начальным состоянием
  initialState: counterInitialState,
  // 5. Создаём функцию, которая возвращает объект, внутри которого будут храниться редьюсеры (функции, которые отвечают
  // за изменение стейта)
  reducers: create => ({
    plus: create.reducer((state: CounterState) => {
      state.count = state.count + 1
    }),
    minus: create.reducer((state: CounterState) => {
      state.count = state.count - 1
    }),
  }),
  //  6. Создаём селекторы, которые позволяют забрать данные из стейта в компонент
  selectors: {
    counterValue: (state: CounterState) => state.count,
  },
})

// 7. Экспорт экшенов и селекторов для удобства их использования в компоненте
export const counterActions = counterSlice.actions;
export const counterSelectors = counterSlice.selectors;
