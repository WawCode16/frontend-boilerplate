import React, {Component} from 'react'
import style from './style.scss'


class AddressInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }


  render() {
    const {actions} = this.props
    return (
      <div className="search-container">
        <input/>
      </div>
    )
  }
}

export default AddressInput
