
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import locations from './locations'

export default combineReducers({
  routing,
  locations
})
