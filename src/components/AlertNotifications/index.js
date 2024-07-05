import './index.css'
import {v4 as uuidv4} from 'uuid'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'
import Notification from '../Notification'

const information = [
  <div className="horizantal">
    <AiFillCheckCircle className="green-icon icon" />
    <div className="vertical">
      <h1 className="green text">Success</h1>
      <p className="description">You can access all the files in the folder</p>
    </div>
  </div>,
  <div className="horizantal">
    <RiErrorWarningFill className="red-icon icon" />
    <div className="vertical">
      <h1 className="red text">Error</h1>
      <p className="description">
        Sorry, you are not authorized to have access to delete the file
      </p>
    </div>
  </div>,
  <div className="horizantal">
    <MdWarning className="yellow-icon icon" />
    <div className="vertical">
      <h1 className="yellow text">Warning</h1>
      <p className="description">
        Viewers of this file can see comments and suggestions
      </p>
    </div>
  </div>,
  <div className="horizantal">
    <MdInfo className="blue-icon icon" />
    <div className="vertical">
      <h1 className="blue text">Info</h1>
      <p className="description">Anyone on the internet can view these files</p>
    </div>
  </div>,
]

const AlertNotification = () => (
  <div className="main">
    <div className="sub">
      <h1 className="heading">Alert Notifications</h1>
      <ul className="list-container">
        {information.map(element => (
          <Notification key={uuidv4()}>{element}</Notification>
        ))}
      </ul>
    </div>
  </div>
)

export default AlertNotification
