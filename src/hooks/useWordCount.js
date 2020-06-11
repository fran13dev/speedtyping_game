import { useState, useEffect, useRef } from 'react'

const useWordCount = gameTime => {
  const [text, setText] = useState('')
  const [timeRemaining, setTimeRemaining] = useState(gameTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textAreaRef = useRef(null)

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(prevTime => prevTime - 1)
      }, 1000)
    } else if (timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  const handleText = event => {
    const { value } = event.target
    setText(value)
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setTimeRemaining(gameTime)
    setText('')
    setWordCount(0)
    textAreaRef.current.disabled = false
    textAreaRef.current.focus()
  }

  const endGame = () => {
    setIsTimeRunning(false)
    handleWordCount(text)
  }

  const handleWordCount = userText => {
    const textArr = userText.trim().split(' ')
    setWordCount(textArr.filter(word => word !== '').length)
  }

  return [
    text,
    handleText,
    timeRemaining,
    isTimeRunning,
    wordCount,
    textAreaRef,
    startGame
  ]
}

export default useWordCount
