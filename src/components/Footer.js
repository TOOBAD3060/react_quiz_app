import React from 'react'

const Footer = ({userQuestionBank,quesTracker,isNextBtn,handleNextQuestion}) => {
  return (
    <footer>
    <div className="total_que">
         <span><p>{userQuestionBank[quesTracker].numb}</p>of <p>{userQuestionBank.length}</p> Questions </span> 
    </div>
    {isNextBtn && <button  className="next_btn" onClick={handleNextQuestion}>Next Que</button>}
</footer>
  )
}

export default Footer