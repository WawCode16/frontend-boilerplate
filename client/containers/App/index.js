
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MainSection from '../../components/MainSection'
import * as Actions from '../../actions/index.js'
import './style.scss'

class App extends Component {
  render() {
    const { actions, children } = this.props
    return (
      <div className="page">
        <MainSection actions={actions} />
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
