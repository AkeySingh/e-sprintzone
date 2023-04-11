import { combineReducers } from 'redux'
import cardReducer from './cards'
import signupReducer from './signupReducer'

export default combineReducers({
  card: cardReducer,
  signup: signupReducer,
})
