import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../../actions/intro";
import HeaderLogo from "../../components/HeaderLogo";
import AddressInput from "../../components/AddressInput";


class Intro extends Component {
  render() {
    return (
      <div className="page">
        <HeaderLogo />
        <AddressInput onSearch={::this.search}/>
      </div>
    )
  }

  search(address) {
    this.props.actions.makeQuery(address);
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
