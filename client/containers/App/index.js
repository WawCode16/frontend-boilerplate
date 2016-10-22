
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import MainSection from '../../components/MainSection'
import Actions from '../../actions/app'
import './style.scss'

class App extends Component {
  render() {
    const { actions, children } = this.props
    return (
      <div className="page">
        dupa
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
