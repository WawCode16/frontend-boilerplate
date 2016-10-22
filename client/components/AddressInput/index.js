import React, {Component, PropTypes} from 'react'
import Autocomplete from 'react-autocomplete'
import style from './style.scss'


class AddressInput extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      location: '',
      availableLocations: []
    }
  }

  render() {
    return (
      <div className="search-container">
        <Autocomplete
          inputProps={{name: "US state", id: "states-autocomplete", placeholder: "Wpisz adres..."}}
          ref="autocomplete"
          value={this.state.location}
          items={this.state.availableLocations}
          getItemValue={(item) => item.value}
          onSelect={value => this.search(value)}
          onChange={::this.onChange}
          renderItem={(item, isHighlighted) => (<div className="autocomplete-item">{item.value}</div>)}
        />
        <button className="button" onClick={::this.search}>Go</button>
      </div>
    )
  }

  onChange(event, value) {
    this.setState({
      location: value,
      availableLocations: []
    })
    // clearTimeout(this.changeTimeout);
    // this.changeTimeout = setTimeout(() => {
    //   this.loadAvailableLocations(value).then(availableValues => {
    //     this.setState({
    //       availableLocations: availableValues
    //     })
    //   })
    // }, 500);

  }

  search(value) {
    if (value !== '' || this.state.location !== '') {
      this.props.onSearch(value || this.state.location);
    }
  }

  loadAvailableLocations(query) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([1,2,3].map(index => ({value: query.repeat(index)})))
      }, 1000)
    })
  }
}

export default AddressInput

AddressInput.propTypes = {
  onSearch: PropTypes.func.required
}
