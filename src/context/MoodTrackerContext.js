import React from 'react'

const MoodTrackerContext = React.createContext({
  activeEmojiOptionId: '',
  activeDaysOptionId: '',
  activeEmojiId: '',
  activeMonth: '',
  activeMonthNumber: '',
  monthsList: [],
  daysList: [],
  emojisList: [],
  activeEmojiUrl: '',
  activeEmojiName: '',
  emojisUrl: '',
  activeDayButton: '',
  activeMonthFilter: '',
  emojiesMonthwiseCount: '',
  increaseFn: () => {},
  decreaseFn: () => {},
  displayEmoji: () => {},
  onChangeEmojiOption: () => {},
  onChangeDaysOption: () => {},
  emojiChange: () => {},
  emojiCountFn: () => {},
  onChangeActiveMonthName: () => {},
  reChartFn: () => {},
  isActive: '',
  onClickActiveHome: () => {},
  onClickActiveReport: () => {},
})

export default MoodTrackerContext
