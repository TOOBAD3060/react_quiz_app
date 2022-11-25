import StartBtn from "./StartBtn";
import '../index.css';
import InfoBox from "./InfoBox";
import QuizBox from "./QuizBox";
import ResultBox from "./ResultBox";
import React ,{useState,useEffect} from "react";
import {questions} from "./questions"

function App() {

//    states
  const [isStartBtn,setIsStartBtn] = useState(true)
  const [isInfoBox,setIsInfoBox] = useState(false)
  const [isQuizBox,setIsQuizBox] = useState(false)
  const [isResultBox,setIsResultBox] = useState(false)
  const [rand,setRand] = useState(0)
  const [score,setScore] = useState(0)
  const [quesTracker,setQuesTracker] = useState(0)

  //  Getting rand value
  
  useEffect(()=>{
    setRand(Math.floor(Math.random() * questions.length))
  },[isResultBox])
  
  const userQuestionBank = questions[rand]

        // Functionalities

        // Start Btn
  const handleStart = () => {
    setIsStartBtn(false)
    setIsInfoBox(true)
  }
//  Exit Btn
  const handleExit = () => {
    setIsStartBtn(true)
    setIsInfoBox(false)
  }
//  Continue Btn
  const handleContinue = () => {
    setIsInfoBox(false)
    setIsQuizBox(true)
  }
// Quit Btn
  const handleQuit = () => {
    setIsResultBox(false)
    setIsStartBtn(true)
    setQuesTracker(0)
    setScore(0)
   }

  return (
    <div className="App">
        {isStartBtn && <StartBtn handle={handleStart}/>}
        {isInfoBox && <InfoBox exit={handleExit} cont= {handleContinue} />}
        {isQuizBox && <QuizBox  quesTracker={quesTracker} setQuesTracker={setQuesTracker} userQuestionBank={userQuestionBank} setIsQuizBox={setIsQuizBox} setIsResultBox = {setIsResultBox} score ={score} setScore={setScore} />}
        {isResultBox && <ResultBox handleQuit={handleQuit} setIsQuizBox={setIsQuizBox} setIsResultBox = {setIsResultBox} setScore={setScore} setQuesTracker={setQuesTracker} score = {score} userQuestionBank={userQuestionBank}/>}
    </div>
  );
}

export default App;
