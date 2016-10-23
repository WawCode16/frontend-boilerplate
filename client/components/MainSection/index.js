import React, {Component} from 'react'
import HeaderLogo from '../HeaderLogo/index'
import AddressInput from '../AddressInput/index'
import style from './style.scss'
import Score from '../Score'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  renderMaps() {
    return (
      <MapElement
        onMapLoad={_.noop}
        onMapClick={_.noop}
        markers={[]}
        onMarkerRightClick={_.noop}
      />
    )
  }


  render() {
    const {actions} = this.props
    return (
      <div className="main-section">
        {/*<HeaderLogo />*/}

        <div className="main-score-container">
          <div className="score-icon-container">
            <i className="fa fa-trophy"></i>
            <span className="score-item">{this.props.scores.totalScore}</span>
          </div>
        </div>

        {/*List of items*/}
        <div className="sub-scores-container">
          {
            this.props.scores.subscores.map(score => (
              <Score score={score}/>
            ))
          }
        </div>
      </div>
    )
  }
}

export default MainSection
