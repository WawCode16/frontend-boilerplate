import React, {Component} from 'react'
import HeaderLogo from '../HeaderLogo/index'
import AddressInput from '../AddressInput/index'
import style from './style.scss'
import classNames from 'classnames'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }

  static scoreCategoryToIconClass = {
    education: 'fa-graduation-cap',
    dining: 'fa-cutlery',
    'green-areas': 'fa-tree'
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
        <div className="sub-scores-container">
          {
            this.props.scores.subscores.map(score => (
              <div className="score">
                <div className="score-content">
                  <div className="score-icon-container">
                    <i className={this.getIconClass(score)}></i>
                  </div>
                  <div className="score-items">
                    <div className="score-item">
                      <div className="score-item-title">ocena</div>
                      <div className="score-item-value">{score.score}</div>
                    </div>
                    <div className="score-item">
                      <div className="score-item-title">w promieniu {score.radius}km</div>
                      <div className="score-item-value">{score.inRadius}</div>
                    </div>
                    <div className="score-item">
                      <div className="score-item-title">do najbliższego</div>
                      <div className="score-item-value">{score.nearestDistance}m</div>
                    </div>
                  </div>
                </div>
                <div className="score-rate-bar" style={({width: (score.score * 10)+'%'})}></div>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  getIconClass(score) {
    let classes = {
      fa: true
    };
    if(MainSection.scoreCategoryToIconClass[score.category] !== undefined) {
      classes[MainSection.scoreCategoryToIconClass[score.category]] = true;
    }
    return classNames(classes);
  }
}

export default MainSection
