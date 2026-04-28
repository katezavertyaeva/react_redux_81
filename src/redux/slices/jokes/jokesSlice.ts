import { Action } from "@reduxjs/toolkit"
import { createAppSlice } from "../../createAppSlice"
import { JokesState } from "./types"

const jokesIntialState: JokesState = {
  data: "",
  error: undefined,
  isLoading: false,
}

export const jokesSlice = createAppSlice({
  name: "JOKES",
  initialState: jokesIntialState,
  reducers: create => ({
    setJoke: create.reducer(
      (state: JokesState, action: { payload: string; type: string }) => {
        state.data = action.payload
      },
    ),
    setError: create.reducer((state: JokesState, action: { payload: string; type: string }) => {
      state.error = action.payload
    }),
    fetchStart: create.reducer((state: JokesState) => {
      state.isLoading = true
    }),
    fetchEnd: create.reducer((state: JokesState) => {
      state.isLoading = false
    }),
  }),
  selectors: {
    jokeData: (state: JokesState) => state,
  },
})

export const jokesSliceActions = jokesSlice.actions
export const jokesSliceSelectors = jokesSlice.selectors
