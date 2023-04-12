import { TEXT_FIELD } from './types'
import axios from 'axios'

export const handleChange = (name, value) => async (dispatch) => {
  dispatch({
    type: TEXT_FIELD,
    payload: { name, value },
  })
}

export const addUser = (data) => async (dispatch) => {
  const newData = JSON.stringify(data)
  axios
    .post('/api/user/add', data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}
