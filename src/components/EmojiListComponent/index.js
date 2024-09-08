import './index.css'

const EmojiListComponent = props => {
  const {emojiDetails, isActive, emojiChange} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const textWidth = isActive ? 'activeText' : ''
  const imageWidth = isActive ? 'activeImg' : ''

  const onClickEmoji = () => {
    emojiChange(id, emojiUrl, emojiName)
  }

  return (
    <li onClick={onClickEmoji}>
      <p className={textWidth}>{emojiName}</p>
      <img src={emojiUrl} alt={emojiName} className={imageWidth} />
    </li>
  )
}
export default EmojiListComponent
