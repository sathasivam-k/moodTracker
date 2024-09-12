import './index.css'

const DaysButton = props => {
  const {daysDetails, displayEmoji} = props
  const {date, emojiUrl} = daysDetails

  const onClickEmoji = () => {
    const value = parseInt(date)

    displayEmoji(value - 1)
  }

  return (
    <li className="listItems">
      <button type="button" onClick={onClickEmoji}>
        <p>{date}</p>
        <img src={emojiUrl} />
      </button>
    </li>
  )
}

export default DaysButton
