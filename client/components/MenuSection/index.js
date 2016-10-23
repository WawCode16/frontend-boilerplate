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
        <div id ="header-top">
            <nav id="home-nav" className="nav-wide" role="navigation">
                <ul>
                    <li className="home"><a href="#">HOME</a></li>
                    <li className="about rightflow active"><a href="#">RAPORT</a></li>
                    <li className="haunting"><a href="#">EDUKACJA!</a></li>
                    <li className="party"><a href="#">KULINARIA</a></li>
                    <li className="contact"><a href="#">TERENY ZIELONE</a></li>
                    <li className="contact"><a href="#">TRANSPORT</a></li>
                </ul>
            </nav>
        </div>
      </div>
    )
  }

  search() {

  }
}

export default MenuSection
