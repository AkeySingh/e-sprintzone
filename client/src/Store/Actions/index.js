import axios from 'axios'

export const fetchMovie = (title) => async (dispatch) => {
  const response = await axios.get(
    `https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?t=${'dragon'}&apikey=APIKEY`
  )
  dispatch({
    type: 'FETCH_MOVIE',
    payload: response.data,
  })
}
