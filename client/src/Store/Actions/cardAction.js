import axios from 'axios'
import { GET_CARDS } from './types'

export const getCardList = () => async (dispatch) => {
  axios({
    method: 'GET',
    url: 'https://api.escuelajs.co/api/v1/products?offset=&limit=10',
  })
    .then((res) => {
      if (res.status === 200) {
        dispatch({
          type: GET_CARDS,
          payload: res.data,
        })
      }
    })
    .catch((err) => {
      console.error({ message: err })
    })
}
