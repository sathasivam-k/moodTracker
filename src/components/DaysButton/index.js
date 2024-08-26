import './index.css'

const DaysButton = props => {
  const {daysDetails, displayEmoji, emojisUrl, isActive} = props
  const {id, date, emojiUrl} = daysDetails
  const emojiIcon = isActive ? emojisUrl : ''

  const onClickEmoji = () => {
    let value = parseInt(date)

    displayEmoji(value - 1)
  }

  return (
    <li className="listItems">
      <button onClick={onClickEmoji}>
        <p>{date}</p>
        <img src={emojiUrl} />
      </button>
    </li>
  )
}

export default DaysButton
