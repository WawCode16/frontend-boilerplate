import React, {Component} from 'react'
import HeaderLogo from '../HeaderLogo/index'
import MapElement from '../MapElement/index'
import AddressInput from '../AddressInput/index'
import style from './style.scss'


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
        <HeaderLogo />
        {this.renderMaps()}
      </div>
    )
  }
}

export default MainSection
