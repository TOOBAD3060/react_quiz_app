import React from 'react'

const Header = ({isNextBtn,isDangerTime,time,timeLine}) => {
  return (
    <header>
        
      <div className="title">Random Quiz  </div>
        <div className="timer">
            <div className="time_text"> Time {isNextBtn ? `Off` :`Left`} </div>
            <div className="timer_sec">{!isNextBtn && time} </div>
        </div>
      <div className= {`time_line ${isDangerTime && "timeUp" }`} style={{width:`${timeLine}px`}} ></div>
    </header>
  )
}

export default Header