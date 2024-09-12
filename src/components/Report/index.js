import './index.css'

const Report = props => {
  const {emojisCountDetails} = props
  const {emojiName, emojiUrl, emojiCount} = emojisCountDetails

  return (
    <div>
      <p>{emojiName}</p>
      <img src={emojiUrl} />
      <p>{emojiCount}</p>
    </div>
  )
}

export default Report
