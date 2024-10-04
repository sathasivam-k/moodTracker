import {BarChart, Bar, XAxis, YAxis, ResponsiveContainer} from 'recharts'

import './index.css'

const Report = props => {
  const {
    monthsListDetails,
    emojisList,
    activeMonth,
    onChangeActiveMonthName,
    chartData,
  } = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  console.log(chartData)

  const onChangeMonthFilter = event => {
    onChangeActiveMonthName(event.target.value)
  }

  let veryHappyCount = 0
  let happyCount = 0
  let neutralCount = 0
  let sadCount = 0
  let verySadCount = 0

  monthsListDetails.forEach(item => {
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
    <div className="emojiiAlignment">
      <div>
        <p>Very Happy</p>
        <img src={emojisList[0].emojiUrl} />
        <p>{veryHappyCount}</p>
      </div>
      <div>
        <p>Happy</p>
        <img src={emojisList[1].emojiUrl} />
        <p>{happyCount}</p>
      </div>
      <div>
        <p>Neutral</p>
        <img src={emojisList[2].emojiUrl} />
        <p>{neutralCount}</p>
      </div>
      <div>
        <p>Sad</p>
        <img src={emojisList[3].emojiUrl} />
        <p>{sadCount}</p>
      </div>
      <div>
        <p>Very Sad</p>
        <img src={emojisList[4].emojiUrl} />
        <p>{verySadCount}</p>
      </div>
      <div>
        <select value={activeMonth} onChange={onChangeMonthFilter}>
          {monthsListDetails.map(eachItem => (
            <option key={eachItem.month} value={eachItem.month}>
              {eachItem.monthName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={chartData}
            margin={{
              top: 5,
            }}
          >
            <XAxis
              dataKey="emojiUrl"
              tick={{
                stroke: 'gray',
                strokeWidth: 1,
              }}
            />
            <YAxis
              tickFormatter={DataFormatter}
              tick={{
                stroke: 'gray',
                strokeWidth: 0,
              }}
            />
            <Bar dataKey="count" fill="#1f77b4" barSize="20%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Report
