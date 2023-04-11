import { TEXT_FIELD } from '../Actions/types'

let initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
}

function signupReducer(signupState = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case TEXT_FIELD:
      return { ...signupState, [payload.name]: payload.value }
    default:
      return signupState
  }
}

export default signupReducer
