
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import app from './app'
import intro from './intro'

export default combineReducers({
  routing,
  app,
  intro
})
