import React, {useState} from 'react'
import './EightBall.css'



function EightBall({ answers }) {
    
    function getAnswerAndColor(arr) {
        const idx = Math.floor(Math.random() * (arr.length)) + 1
        return arr[idx]
    }
    const [answer, setAnswer] = useState('Ask me a question, dawg')
    const [color, setColor] = useState('black')

    function handleBallChange() {
        const {msg, color} = getAnswerAndColor(answers)
        setAnswer(msg)
        setColor(color)
    }         

  return (
    <div className='EightBall' onClick={handleBallChange} style={{backgroundColor: color}}>{answer}</div>
  )
}

export default EightBall