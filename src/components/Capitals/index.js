import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {idValue: countryAndCapitalsList[0].id}

  changeId = event => {
    this.setState({idValue: event.target.value})
  }

  render() {
    const {idValue} = this.state
    const textCapital = countryAndCapitalsList.filter(
      eachValue => eachValue.id === idValue,
    )
    console.log(textCapital)
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Countries and Capitals</h1>
          <div className="list-container">
            <div className="row-container">
              <select
                className="select-el"
                name="capitals"
                id="capitals"
                onChange={this.changeId}
              >
                <option value={countryAndCapitalsList[0].id}>
                  {countryAndCapitalsList[0].capitalDisplayText}
                </option>
                <option value={countryAndCapitalsList[1].id}>
                  {countryAndCapitalsList[1].capitalDisplayText}
                </option>
                <option value={countryAndCapitalsList[2].id}>
                  {countryAndCapitalsList[2].capitalDisplayText}
                </option>
                <option value={countryAndCapitalsList[3].id}>
                  {countryAndCapitalsList[3].capitalDisplayText}
                </option>
                <option value={countryAndCapitalsList[4].id}>
                  {countryAndCapitalsList[4].capitalDisplayText}
                </option>
              </select>
              <p className="para" htmlFor="capitals">
                is capital of which country
              </p>
            </div>
            <p className="country-para">{textCapital[0].country}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Capitals
