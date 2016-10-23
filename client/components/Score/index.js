import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import style from './style.scss'


class Score extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
    }
  }

  static scoreCategoryToIconClass = {
    education: 'fa-graduation-cap',
    dining: 'fa-cutlery',
    'green-areas': 'fa-tree'
  }

  render() {
    let score = this.props.score;
    return (
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
    )
  }

  getIconClass(score) {
    let classes = {
      fa: true
    };
    if(Score.scoreCategoryToIconClass[score.category] !== undefined) {
      classes[Score.scoreCategoryToIconClass[score.category]] = true;
    }
    return classNames(classes);
  }
}

export default Score

Score.propTypes = {
  score: PropTypes.object.required
}
