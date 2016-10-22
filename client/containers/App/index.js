
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import MainSection from '../../components/MainSection'
import * as actions from '../../actions/app'
import * as selectors from '../../reducers/app'
import './style.scss'

class App extends Component {

  renderData(data) {
    console.log(this.props.data)
    return (data &&
      <ul>
        {this.props.data.locations.map((item, i) =>
          <li key={i}>
            {item.name}
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
    data: {
     locations: [
       {
         name: 'Nazwa',
         description: 'Opis Opis Opis Opis Opis Opis Opis Opis Opis',
         additionalInfo: [
           'Tu będzie fajnie',
           'A nawet bardzo'
         ],
         distance: {
           type: 'walking',
           value: 700,
           unit: 'm',
           time: 15
         }
       },
       {
         name: 'Nazwa 2',
         description: 'Drugi Opis Drugi Opis Drugi Opis Drugi Opis Drugi Opis ',
         additionalInfo: [
           'Tu będzie jeszcze fajniej'
         ],
         distance: {
           type: 'driving',
           value: 2,
           unit: 'km',
           time: 7
         }
       }
     ]
    },
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
