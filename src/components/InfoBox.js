import React from 'react'

const InfoBox = ({exit,cont}) => {
  return (
    <div>
       <div className="infoBox">
          <div className="info-title">
              <span>Rules of this game</span>
          </div>
          <div className="info_list">
              <div className="info">1. You will have only <span>10 seconds</span> per each question </div>
              <div className="info">2. Once you select your answer,it can't be undone </div>
              <div className="info">3. You can't select any option once time goes off </div>
              <div className="info">4. You can't exit from the Quiz while you're playing</div>
              <div className="info">5. You'll get points on the basis of your correct answers</div>
          </div>
          <div className="buttons">
              <button className="quit" onClick={exit}>Exit Quiz</button>
              <button className="restart" onClick={cont}>Continue</button>
          </div>
      </div>

    </div>
  )
}

export default InfoBox