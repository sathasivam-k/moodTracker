import './index.css'

const EmojiListComponent = props => {
  const {emojiDetails, isActive, emojiChange} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const textWidth = isActive ? 'activeText' : 'inActiveText'
  const imageWidth = isActive ? 'activeImg' : 'inActiveImg'

  const onClickEmoji = () => {
    emojiChange(id, emojiUrl, emojiName)
  }

  return (
    <li onClick={onClickEmoji} className="listItem1">
      <p className={textWidth}>{emojiName}</p>
      <img src={emojiUrl} alt={emojiName} className={imageWidth} />
    </li>
  )
}
export default EmojiListComponent
