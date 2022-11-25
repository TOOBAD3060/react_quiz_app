import React from 'react'

const DisplayQues = ({userQuestionBank,quesTracker}) => {
  return (
    <div className="ques_text">
      <span>{`${userQuestionBank[quesTracker].numb}. ${userQuestionBank[quesTracker].question}`}</span>
    </div>
  )
}

export default DisplayQues