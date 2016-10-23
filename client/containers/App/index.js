import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import MainSection from '../../components/MainSection'
import MenuSection from '../../components/MenuSection'
import * as actions from '../../actions/app'
import * as selectors from '../../reducers/app'
import './style.scss'

class App extends Component {

  renderData(data) {
    return (data &&
      <ul>
        {Object.keys(this.props.data).map((key, i) =>
          <li key={i}>
            {key}
          </li>)}
      </ul>
    )
  }

  render() {
    const {actions} = this.props
    return (
        <div className="page horizontal row">
          <MenuSection scores={this.props.data.scores}/>
          <MainSection scores={this.props.data.scores}/>
          {/*Query = {this.props.query}
           {this.props.loading ?
           <div>Loading...</div> :
           this.renderData(this.props.data)}*/}
        </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    query: selectors.querySelector(state.app),
    data: {
      scores: {
        totalScore: 7,
        maxScore: 10,
        subscores : [{
            category: 'education',
            score: 7,
            inRadius: 3,
            radius: 5,
            nearestDistance: 345
          },{
            category: 'dining',
            score: 9,
            inRadius: 4,
            radius: 5,
            nearestDistance: 100
          },{
            category: 'green-areas',
            score: 5,
            inRadius: 5,
            radius: 5,
            nearestDistance: 550
          },{
            category: 'education',
            score: 7,
            inRadius: 3,
            radius: 5,
            nearestDistance: 345
          },{
            category: 'dining',
            score: 9,
            inRadius: 4,
            radius: 5,
            nearestDistance: 100
          },{
            category: 'green-areas',
            score: 5,
            inRadius: 5,
            radius: 5,
            nearestDistance: 550
          }
        ]
      },
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
