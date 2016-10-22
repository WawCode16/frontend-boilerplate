
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Actions from '../../actions/intro'


class Intro extends Component {
  render() {
    const { actions, children } = this.props
    return (
      <div>
        <h1>Intro</h1>
        <Link to="/results">Go to results</Link>
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
)(Intro)
