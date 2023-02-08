// Write your code here
import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamItem} = props
  const {name, id, teamImgUrl} = teamItem

  return (
    <li>
      <Link to={`/team-matches/${id}`}>
        <img src={teamImgUrl} alt={`${name}`} />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
