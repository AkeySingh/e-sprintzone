import axios from 'axios'
import { TEXT_FIELD } from './types'

export const handleChange = (name, value) => async (dispatch) => {
  dispatch({
    type: TEXT_FIELD,
    payload: { name, value },
  })
}

export const addUser = (data) => async (dispatch) => {
  const newData = JSON.stringify(data)
  axios
    .post('http://localhost:8000/api/user/add', data, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (res.status === 201) {
        alert('User Add Successfully')
        dispatch({
          type: 'Is_OPEN_MODEL',
          payload: false,
        })
      }
    })
    .catch((err) => console.log(err))
}
