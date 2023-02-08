// Write your code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchDetails: {}, isTrue: true}

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const newData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recentMatches,
    }
    const {latestMatchDetails} = newData
    const newLatestDetails = {
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      result: latestMatchDetails.result,
      umpires: latestMatchDetails.umpires,
      competing: latestMatchDetails.competing,
      competingTeamLogo: latestMatchDetails.competingTeamLogo,
      firstInnings: latestMatchDetails.firstInnings,
      secondInnings: latestMatchDetails.secondInnings,
      manOfTheMatch: latestMatchDetails.manOfTheMatch,
    }
    const {recentMatches} = newData
    const newRecentMatches = recentMatches.map(each => ({
      id: each.id,
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      result: each.result,
      matchStatus: each.match_status,
    }))
    newData.recentMatches = newRecentMatches
    newData.latestMatchDetails = newLatestDetails
    this.setState({matchDetails: newData, isTrue: false})
  }

  render() {
    const {matchDetails, isTrue} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchDetails

    return (
      <>
        <div className={`bg-container ${id}`}>
          {isTrue && (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          )}
          {!isTrue && (
            <>
              <img src={teamBannerUrl} alt="team banner" />
              <h1>Latest Matches</h1>
              <LatestMatch key={latestMatchDetails.id} />
              <ul>
                {recentMatches.map(each => (
                  <MatchCard key={each.id} matchDetails={latestMatchDetails} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}
export default TeamMatches
