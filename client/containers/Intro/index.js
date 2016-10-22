import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {Link, browserHistory} from 'react-router'
import {routerActions} from 'react-router-redux'
import {connect} from 'react-redux'
import Actions from '../../actions/intro'
import HeaderLogo from '../../components/HeaderLogo/index'
import AddressInput from '../../components/AddressInput/index'


class Intro extends Component {
  render() {
    const {actions, children} = this.props
    return (
      <div className="page">
        <HeaderLogo />
        <AddressInput onSearch={::this.search}/>
        <button onClick={::this.submit}>Submit</button>
      </div>
    )
  }

  submit() {
    this.props.actions.makeQuery('Duppa');
  }

  search(address) {
    browserHistory.push('/results');
  }
}

function mapStateToProps(state) {
  return {}
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
