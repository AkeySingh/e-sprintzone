import { GET_CARDS } from '../Actions/types'

let initialState = {
  allList: [],
}

function cardReducer(cardStates = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case GET_CARDS:
      return { ...cardStates, allList: payload }

    default:
      return cardStates
  }
}

export default cardReducer
