// Write your code here

import Loader from 'react-loader-spinner'

import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isTrue: true, teamList: []}

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    console.log(data)
    const newList = teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamList: newList, isTrue: false})
  }

  render() {
    const {teamList, isTrue} = this.state
    return (
      <>
        <div>
          {isTrue && (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          )}
          {!isTrue && (
            <>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png"
                  alt="ipl logo"
                />
                <h1>IPL Dashboard</h1>
              </div>
              <ul>
                {teamList.map(each => (
                  <TeamCard key={each.id} teamItem={each} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}
export default Home
