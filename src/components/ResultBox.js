import React from 'react'

const ResultBox = ({score,userQuestionBank,setIsResultBox,setIsQuizBox,setScore,setQuesTracker,handleQuit}) => {

 const handleRestart = () => {
      setIsResultBox(false)
      setIsQuizBox(true)
      setQuesTracker(0)
      setScore(0)
 }


 

  return (
    <div className="result_box"> 
    <div className="icon">
           <img  src="images/image1.png" alt="" width="70px" /> 
    </div>
    <div className="complete_text">You've completed the Quiz</div>
    <div className="score_text">
         <span>and  You got  <p>{score}</p> out of <p>{userQuestionBank.length}</p> </span> 
    </div>

    <div className="buttons">
        <button className="restart" onClick={handleRestart}>Replay Quiz</button>
        <button className="quit" onClick={handleQuit}>Quit Quiz</button>
    </div>
</div>
  )
}
 
export default ResultBox