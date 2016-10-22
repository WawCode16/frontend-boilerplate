
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as actions from '../../actions/intro'


class Intro extends Component {
  render() {
    const { actions, children } = this.props
    return (
      <div>
        <h1>Intro</h1>
        <button onClick={::this.submit}>Submit</button>
      </div>
    )
  }

  submit() {
    this.props.actions.makeQuery('Duppa');
  }
}

function mapStateToProps(state) {
  return { }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro)
