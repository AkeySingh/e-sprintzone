import { legacy_createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './Reducers/index'

export const GlobalStore = legacy_createStore(combineReducers, applyMiddleware(thunk))
