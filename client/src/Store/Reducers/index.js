import { combineReducers } from 'redux'
import cardReducer from './cards'
import signupReducer from './signupReducer'
import adminProductReducer from './adminProductReducer'

export default combineReducers({
  card: cardReducer,
  signup: signupReducer,
  adminProduct: adminProductReducer,
})
