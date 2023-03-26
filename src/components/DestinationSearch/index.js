import {Component} from 'react'
import './index.css'
import DestItem from '../DestinationItem'

export default class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput),
    )

    console.log(searchResults)

    return (
      <div className="container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-bar">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <img
            className="img-search"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <div className="lists-container">
          <ul className="list-container">
            {searchResults.map(eachUser => (
              <DestItem DestDetails={eachUser} key={eachUser.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
