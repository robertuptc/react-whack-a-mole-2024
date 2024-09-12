import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole({ isVisible, points, setPoints }) {

  const handleClick = (e) => {
    setPoints(points + 1)
  }
  return (
    <div className="den">
      {
        isVisible ?
        <img src={MoleIcon} className="Mole" alt="Mole" onClick={(e) => handleClick(e)} /> :
        null
      }
    </div>
  )
}

export default Mole
