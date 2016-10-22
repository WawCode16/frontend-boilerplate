
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import MainSection from '../../components/MainSection'
import * as actions from '../../actions/app'
import * as selectors from '../../reducers/app'
import from './style.scss'

class App extends Component {

  renderData(data) {
    return (data &&
      <ul>
        {Object.keys(this.props.data).map((key, i) =>
          <li key={i}>
            {key} = {this.props.data[key]}
          </li>)}
      </ul>
    )
  }

  render() {
    const { actions } = this.props
    return (
      <div className="page">
        <MainSection actions={actions} />
        Query = {this.props.query}
        {this.props.loading ?
          <div>Loading...</div> :
          this.renderData(this.props.data)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    query: selectors.querySelector(state.app),
    data: selectors.dataSelector(state.app),
    loading: selectors.isLoading(state.app)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
