import React, {Component} from 'react'
import Autocomplete from 'react-autocomplete'
import style from './style.scss'


class AddressInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      location: '',
      availableLocations: [{value: 'dupa'}]
    }
  }


  render() {
    const {actions} = this.props
    return (
      <div className="search-container">
        <Autocomplete
          inputProps={{name: "US state", id: "states-autocomplete", placeholder:"Wpisz adres..."}}
          ref="autocomplete"
          value={this.state.location}
          items={this.state.availableLocations}
          getItemValue={(item) => item.value}
          onSelect={::this.search}
          onChange={(event, value) => {this.onChange(value)}}
          renderItem={(item, isHighlighted) => (<div className="autocomplete-item">{item.value}</div>)}
        />
        <button className="button" onClick={::this.search}>Go</button>
      </div>
    )
  }

  onChange(value) {
    this.setState({
      location: value
    })
  }

  search(value) {
    debugger;
    if (value !== '') {
      this.props.onSearch(value);
    }
  }
}

export default AddressInput
