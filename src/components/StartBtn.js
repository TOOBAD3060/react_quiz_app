import React from 'react'
import check from "../check-markE.jpg"
const StartBtn = ({handle}) => {
  return (
    <div className ="startBtn hidden">
        <img alt='check mark' src={check} width="30px"/>
        <button onClick={handle}>
        Start Quiz
        </button></div>
  )
}
export default StartBtn