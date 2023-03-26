// Write your code here
import './index.css'

const DestItem = props => {
  const {DestDetails} = props
  const {imgUrl, name, id} = DestDetails

  return (
    <li className="card-container">
      <img src={imgUrl} alt={name} />
      <div className="user-details-container">
        <p className="user-name"> {name} </p>
      </div>
    </li>
  )
}

export default DestItem
