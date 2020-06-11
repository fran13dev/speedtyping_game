import React from 'react'
import useWordCount from './hooks/useWordCount'

const App = () => {
  const [
    text,
    handleText,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textAreaRef,
    startGame
  ] = useWordCount(30)

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleText}
        onPaste={e => e.preventDefault()}
        disabled={!isTimeRunning}
      />
      <h4>Time Remaining: {timeRemaining} sec</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start Game
      </button>
      <h4>Word Count: {wordCount}</h4>
    </div>
  )
}

export default App
