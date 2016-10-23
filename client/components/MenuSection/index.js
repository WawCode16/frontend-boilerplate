import React, {Component} from 'react'
import AddressInput from '../AddressInput/index'
import style from './style.scss'


class MenuSection extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }


  render() {
    return (
      <div className="menu-section">
        <AddressInput onSearch={::this.search}/>
      </div>
    )
  }

  search() {

  }
}

export default MenuSection
