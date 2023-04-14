import { TEXT_FIELD, Is_OPEN_MODEL } from '../Actions/types'

let initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  isOpen: false,
}

function signupReducer(signupState = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case 'TEXT_FIELD':
      return { ...signupState, [payload.name]: payload.value }
    case 'Is_OPEN_MODEL':
      return { ...signupState, isOpen: payload }
    default:
      return signupState
  }
}

export default signupReducer
