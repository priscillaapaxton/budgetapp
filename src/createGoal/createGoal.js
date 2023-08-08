import './createGoal.css'
import { NavLink } from 'react-router-dom'

export const CreateGoal = () => {
  return (
    <div>
      <p>create a goal here</p>
      <NavLink to={'/creategoal'}>
        create goal
      </NavLink>
    </div>
  )
}