import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import MainSection from "../../components/MainSection";
import MenuSection from "../../components/MenuSection";
import * as actions from "../../actions/app";
import * as selectors from "../../reducers/app";
import "./style.scss";

class App extends Component {

  render() {
    return (
        <div className="page horizontal row">
          <MenuSection scores={this.props.data.scores}/>
          <MainSection scores={this.props.data.scores}/>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    query: selectors.querySelector(state.app),
    data: state.app.data,
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
