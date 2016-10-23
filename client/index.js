
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import Intro from './containers/Intro'
import configure from './store'
import './style.scss'
import 'font-awesome/scss/font-awesome.scss'
import 'bootstrap/dist/css/bootstrap.css'


const store = configure()
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Intro}>
      </Route>
      <Route path="/results" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
