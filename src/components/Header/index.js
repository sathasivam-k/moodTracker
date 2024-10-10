import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import MoodTrackerContext from '../../context/MoodTrackerContext'

import './index.css'

const Header = props => (
  <MoodTrackerContext.Consumer>
    {value => {
      const {onClickActiveHome, onClickActiveReport, isActive} = value

      const classNameHomeActive = isActive ? 'home' : 'report'
      const classNameRepoActive = isActive ? 'report' : 'home'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <div className="headerBg">
          <div className="heading">
            <h1>Daily Mood Tracker</h1>
          </div>

          <div className="homeBg">
            <button
              onClick={onClickActiveHome}
              type="button"
              className="headerBtn"
            >
              <Link to="/" className="linkProp">
                <p className={classNameHomeActive}>Home</p>
              </Link>
            </button>
            <button
              onClick={onClickActiveReport}
              type="button"
              className="headerBtn"
            >
              <Link to="/report" className="linkProp">
                <p className={classNameRepoActive}>Reports</p>
              </Link>
            </button>
            <div>
              <button type="button" onClick={onClickLogout} className="button0">
                Logout
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </MoodTrackerContext.Consumer>
)

export default withRouter(Header)
