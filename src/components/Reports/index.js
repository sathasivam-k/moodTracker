import {BarChart, Bar, XAxis, YAxis, CartesianGrid} from 'recharts'
import Header from '../Header'
import MoodTrackerContext from '../../context/MoodTrackerContext'

import './index.css'

const Reports = () => (
  <MoodTrackerContext.Consumer>
    {value => {
      const {
        monthsList,
        emojisList,
        onChangeActiveMonthName,
        activeMonthFilter,
        reChartFn,
        emojiesMonthwiseCount,
      } = value

      const onChangeMonthFilter = event => {
        onChangeActiveMonthName(event.target.value)
      }

      const DataFormatter = number => {
        if (number > 1000) {
          return `${(number / 1000).toString()}k`
        }
        return number.toString()
      }

      let veryHappyCount = 0
      let happyCount = 0
      let neutralCount = 0
      let sadCount = 0
      let verySadCount = 0

      monthsList.forEach(item => {
        item.dates.forEach(dateItem => {
          if (dateItem.emojiName === 'Very Happy') {
            veryHappyCount += 1
          } else if (dateItem.emojiName === 'Happy') {
            happyCount += 1
          } else if (dateItem.emojiName === 'Neutral') {
            neutralCount += 1
          } else if (dateItem.emojiName === 'Sad') {
            sadCount += 1
          } else if (dateItem.emojiName === 'Very Sad') {
            verySadCount += 1
          }
        })
      })

      return (
        <div className="reportBg">
          <Header />
          {reChartFn()}
          <h1 className="overallHeading">Overall Emojis Reports</h1>
          <div className="overallEmojiBg">
            <div className="card">
              <p className="reportEmojiHeading">Very Happy</p>
              <img
                src={emojisList[0].emojiUrl}
                alt="very happy"
                className="reportEmojiSize"
              />
              <p className="emojiCountText">{veryHappyCount}</p>
            </div>
            <div className="card">
              <p className="reportEmojiHeading">Happy</p>
              <img
                src={emojisList[1].emojiUrl}
                alt="happy"
                className="reportEmojiSize"
              />
              <p className="emojiCountText">{happyCount}</p>
            </div>
            <div className="card">
              <p className="reportEmojiHeading">Neutral</p>
              <img
                src={emojisList[2].emojiUrl}
                alt="neutral"
                className="reportEmojiSize"
              />
              <p className="emojiCountText">{neutralCount}</p>
            </div>
            <div className="card">
              <p className="reportEmojiHeading">Sad</p>
              <img
                src={emojisList[3].emojiUrl}
                alt="sad"
                className="reportEmojiSize"
              />
              <p className="emojiCountText">{sadCount}</p>
            </div>
            <div className="card">
              <p className="reportEmojiHeading">Very Sad</p>
              <img
                src={emojisList[4].emojiUrl}
                alt="very sad"
                className="reportEmojiSize"
              />
              <p className="emojiCountText">{verySadCount}</p>
            </div>
          </div>

          <div className="reportSelect">
            <p className="overallHeading">Monthly Reports</p>
            <div>
              <select
                value={activeMonthFilter}
                onChange={onChangeMonthFilter}
                className="reportSelectList"
              >
                {monthsList.map(eachItem => (
                  <option key={eachItem.month} value={eachItem.month}>
                    {eachItem.monthName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="chartBg">
            <BarChart
              data={emojiesMonthwiseCount}
              width={1250}
              height={400}
              margin={{
                top: 5,
                right: 30,
                left: 80,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="5 5" />
              <XAxis
                dataKey="id"
                strokeDasharray="5 5"
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={DataFormatter}
                strokeDasharray="5 5"
                axisLine={false}
                tickLine={false}
              />
              <Bar
                dataKey="count"
                fill="#ffbe38"
                barSize={80}
                radius={[10, 10, 0, 0]}
              />
            </BarChart>
          </div>
        </div>
      )
    }}
  </MoodTrackerContext.Consumer>
)

export default Reports
