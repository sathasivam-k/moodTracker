import {GoChevronLeft, GoChevronRight} from 'react-icons/go'
import Header from '../Header'
import EmojiListComponent from '../EmojiListComponent'
import DaysButton from '../DaysButton'
import MoodTrackerContext from '../../context/MoodTrackerContext'

import './index.css'

const Home = () => (
  <MoodTrackerContext.Consumer>
    {value => {
      const {
        increaseFn,
        decreaseFn,
        activeMonth,
        daysList,
        monthsList,
        emojisList,
        activeEmojiOptionId,
        activeDaysOptionId,
        onChangeEmojiOption,
        onChangeDaysOption,
        activeEmojiId,
        emojiChange,
        activeMonthNumber,
        emojiCountFn,
      } = value

      return (
        <div className="HomeBg">
          <Header />
          <h1 className="heading">Moods in a Month</h1>
          <div className="calEmojiBg1">
            <div className="calEmojiBg">
              <div className="calenderButton">
                <div className="btnCtn1">
                  <button
                    type="button"
                    onClick={decreaseFn}
                    data-testid="previous-button"
                    className="button1"
                  >
                    {/* eslint-disable-next-line */}
                    <GoChevronLeft
                      color="#ffffff"
                      size={30}
                      className="icons"
                    />
                  </button>
                </div>
                <div className="monthCtn">
                  <h1 className="monthName">{activeMonth}</h1>
                </div>
                <div className="btnCtn2">
                  {/* eslint-disable-next-line */}
                  <button
                    type="button"
                    onClick={increaseFn}
                    data-testid="next-button"
                    className="button2"
                  >
                    <GoChevronRight
                      color="#ffffff"
                      size={31}
                      className="icons"
                    />
                  </button>
                </div>
              </div>
              <div>
                <ul className="daysFormat">
                  {daysList.map(eachItem => (
                    <li>
                      <p className="dayStyle">{eachItem.day}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="datesFormat">
                  {monthsList[activeMonthNumber - 1].dates.map(eachItem => (
                    <DaysButton daysDetails={eachItem} key={eachItem.id} />
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="emojiListBg1">
                <ul className="emojiListBg">
                  {emojisList.map(eachItem => (
                    <EmojiListComponent
                      key={eachItem.id}
                      emojiDetails={eachItem}
                      isActive={eachItem.id === activeEmojiId}
                      emojiChange={emojiChange}
                    />
                  ))}
                </ul>
              </div>

              <div className="selectCountBg">
                <div className="selectBg">
                  <div>
                    <select
                      value={activeEmojiOptionId}
                      onChange={onChangeEmojiOption}
                      className="emojiNameSelect"
                    >
                      {emojisList.map(eachItem => (
                        <option
                          key={eachItem.emojiName}
                          value={eachItem.emojiName}
                        >
                          {eachItem.emojiName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <select
                      value={activeDaysOptionId}
                      onChange={onChangeDaysOption}
                      className="daySelect"
                    >
                      {daysList.map(eachItem => (
                        <option
                          key={eachItem.dayNumber}
                          value={eachItem.dayNumber}
                        >
                          {eachItem.day}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="emojiCountText">{emojiCountFn()}</div>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </MoodTrackerContext.Consumer>
)

export default Home
