import axios from "axios"

import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  ButtonWrapper,
  JokesContainer,
  JokeText,
  RandomJokesWrapper,
  Error,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import {
  jokesSliceSelectors,
  jokesSliceActions,
} from "../../redux/slices/jokes/jokesSlice"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    jokesSliceSelectors.jokeData,
  )

  const getJoke = async () => {
    dispatch(jokesSliceActions.fetchStart())

    try {
      const result = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      )
      console.log(result)
      dispatch(
        jokesSliceActions.setJoke(
          `${result.data.setup} - ${result.data.punchline}`,
        ),
      )
    } catch (error: any) {
      console.log(error.message)
      dispatch(jokesSliceActions.setError(error.message))
    } finally {
      dispatch(jokesSliceActions.fetchEnd())
    }
  }

  return (
    <RandomJokesWrapper>
      <ButtonWrapper>
        <Button name="GET JOKES" onButtonClick={getJoke} />
      </ButtonWrapper>
      {isLoading && <Spinner />}
      <JokesContainer>
        {data && <JokeText>{data}</JokeText>}
        {error && <Error>{error}</Error>}
      </JokesContainer>
    </RandomJokesWrapper>
  )
}

export default RandomJokes

//             "https://official-joke-api.appspot.com/random_joke",
