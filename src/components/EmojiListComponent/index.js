import {EmojiLIContainer, EmojiName, EmojiUrl} from './styledComponents'

const EmojiListComponent = props => {
  const {emojiDetails, isActive, emojiChange} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const textWidth = isActive ? '200px' : '100px'
  const imageWidth = isActive ? '200px' : '100px'

  const onClickEmoji = () => {
    emojiChange(id)
  }

  return (
    <EmojiLIContainer onClick={onClickEmoji}>
      <EmojiName textWidth={textWidth}>{emojiName}</EmojiName>
      <EmojiUrl src={emojiUrl} alt={emojiName} imageWidth={imageWidth} />
    </EmojiLIContainer>
  )
}
export default EmojiListComponent
