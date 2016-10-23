import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as actions from "../../actions/intro";
import style from './style.css'

import AddressInput from '../../components/AddressInput'


class Intro extends Component {
  render() {
    return (
      <section id="home">
          <header id="section-top" className="static">
              <div id ="header-top">
                  <a id="logo">
                      <img src="images/logo.png" alt="logo" />
                  </a>
              </div>
          </header>
          <div id="title">
              <p className="title-top">
                  Find the place you love
                  <span className="title-bottom">
                      using our Platform.
                  </span>
               </p>
          </div>
          <div className="text">
              <p id="text-first">
                  By typing the address below in the field you find every important information
                  about the neighborhood.
                  Our platform makes millions of people happy
              </p>
          </div>
          <div id="play-btn">
              <div className="group">
                <input type="text" id="address" required ref="address"/>
                <label>Please provide address</label>
                <input type="submit" id="submit" onClick={() => this.search(this.refs.address.value)}/>
              </div>
          </div>
      </section>
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
