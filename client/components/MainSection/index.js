import React, {Component} from 'react'
import HeaderLogo from '../HeaderLogo/index'
import AddressInput from '../AddressInput/index'
import style from './style.scss'


class MainSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }


  render() {
    const {actions} = this.props
    return (
      <div className="main-section">
        <HeaderLogo />
        <AddressInput />
      </div>
    )
  }
}

export default MainSection
