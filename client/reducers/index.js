
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import locations from './locations'
import intro from './intro'

export default combineReducers({
  routing,
  locations,
  intro
})
