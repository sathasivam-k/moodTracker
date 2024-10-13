import MoodTrackerContext from '../../context/MoodTrackerContext'
import './index.css'

const DaysButton = props => (
  <MoodTrackerContext.Consumer>
    {value => {
      const {displayEmoji} = value
      const {daysDetails} = props
      const {date, emojiUrl} = daysDetails

      const onClickEmoji = () => {
        const valuee = parseInt(date)
        displayEmoji(valuee - 1)
      }

      return (
        <li className='listItems'>
          <button type='button' onClick={onClickEmoji} className='dayButton'>
            <div className='daEmCtn'>
              <div>
                <p className='dateStyle'>{date}</p>
              </div>
              <div>
                <img src={emojiUrl} className='btnEmoji' alt='' />
              </div>
            </div>
          </button>
        </li>
      )
    }}
  </MoodTrackerContext.Consumer>
)

export default DaysButton
