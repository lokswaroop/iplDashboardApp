// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    venue,
    date,
    firstInnings,
    secondInnings,
    competingTeam,
    competingTeamLogo,
  } = latestDetails

  return (
    <div>
      <div>
        <h1>{competingTeam}</h1>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>

      <div>
        <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />

        <p>{firstInnings}</p>
        <p>{competingTeam}</p>
        <p>{secondInnings}</p>
        <p>{manOfTheMatch}</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
