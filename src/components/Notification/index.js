import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => (
  <li className="notification-item">
    <div className="description-box">{props.children}</div>
    <GrFormClose className="cancel" />
  </li>
)

export default Notification
