import React, {Component} from 'react'
import style from './style.scss'


class HeaderLogo extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }


  render() {
    const {actions} = this.props
    return (
      <div className="header-logo">
        <img src=""/>
      </div>
    )
  }
}

export default HeaderLogo
