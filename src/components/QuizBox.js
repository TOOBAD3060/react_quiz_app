import React, { useEffect, useState,useRef } from 'react'

import tickIcon from "../check-markE.jpg"
import DisplayQues from './DisplayQues'
import DisplayOption from './DisplayOptions'
import Footer from './Footer'
import Header from './Header'


const QuizBox = ({userQuestionBank,quesTracker,setQuesTracker,setIsQuizBox,setIsResultBox,score,setScore}) => {
    //  use Refs 
  let timer  =  useRef("myTime") 
    let widthTimer  =  useRef("myWidth") 
    let rightAns = useRef("autoAnswer")
   
    //  states
    const [isNextBtn,setIsNextBtn] = useState(false)
    const [correctClass,setCorrectClass] =  useState(true)
    const [time,setTime] = useState(10)
    const [timeLine,setTimeLine] = useState(0)
    const [isDangerTime,setIsDangerTime]=  useState(false)
    const [check,setCheck] = useState(true)
    const [autoSelect,setAutoSelect] = useState(false)
    
    const [myOptions,setMyOptions]  = useState({
      firstOption: false,
      secondOption: false,
      thirdOption: false,
      fourthOption: false,
    })
    const [isCorrectAns,setIsCorrectAns]  = useState({
      firstOption: false,
      secondOption: false,
      thirdOption: false,
      fourthOption: false,
    })
   
        //   use effect for timer
    
   useEffect (() => {
       timer.current = setInterval(() => {
        setTime((oldTime) => {
          let newTime = oldTime - 1
          if (newTime > 0) {
            return newTime
          }
            
            setIsNextBtn(true)
            clearInterval(timer.current)
            
        })
      }, 1000)
      return () => {
        clearInterval(timer.current)
      }
    }, [time])

    // useEffect for width timer
    
    useEffect (() => {
      widthTimer.current = setInterval(() => {
       setTimeLine((oldTimeLine) => {
         let newTimeLIne = oldTimeLine + 1
         if (newTimeLIne < 400) {
          return newTimeLIne
         }
         
          setAutoSelect(true)
          setIsDangerTime(true)
          setCheck(tickIcon)
           clearInterval(widthTimer.current)
         
        
       })
     }, 18)
     return () => {
       clearInterval(widthTimer.current)
     }
   }, [timeLine])

// use effect for getting correct option 
   useEffect(() => {
     rightAns.current  =   userQuestionBank[quesTracker].option.find((ques)=>{
      return ques === userQuestionBank[quesTracker].answer  
    })
 console.log(rightAns.current)
  },[isNextBtn,userQuestionBank,quesTracker])

      
// const variables

const allOptions = userQuestionBank[quesTracker].option
const answer = userQuestionBank[quesTracker].answer;
const theAnswer = rightAns.current
const disply =  <img alt='correct/wrong' src={check} width="30px" />
const disply2 =  <img alt='correct' src={tickIcon} width="30px" />

//  Functionalities for firstOption
const myFirstOption = () => {
  setIsCorrectAns({...isCorrectAns,firstOption:true})
}
const myFirstOption2 = () => {
  setMyOptions({...myOptions,firstOption:true})
}

//  Functionalities for secondOption
const mySecondOption = () => {
  setIsCorrectAns({...isCorrectAns,secondOption:true})
}
const mySecondOption2 = () => {
  setMyOptions({...myOptions,secondOption:true})
}
//  Functionalities for thirdOption
const myThirdOption = () => {
  setIsCorrectAns({...isCorrectAns,thirdOption:true})
}
const myThirdOption2 = () => {
  setMyOptions({...myOptions,thirdOption:true})
}
// Functionalities for fourthOption
const myFourthOption = () => {
  setIsCorrectAns({...isCorrectAns,fourthOption:true})
}
const myFourthOption2 = () => {
  setMyOptions({...myOptions,fourthOption:true})
}

//  NextBtn functionalities
const handleNextQuestion = () => {
      
        if(quesTracker  < userQuestionBank.length-1){
          setQuesTracker(quesTracker + 1 )
        }
        else{
          setIsQuizBox(false)
            setIsResultBox(true)
        }
        setMyOptions({
          firstOption: false,
           secondOption: false,
            thirdOption: false,
            fourthOption: false,
        })
        setIsCorrectAns({
          firstOption: false,
           secondOption: false,
            thirdOption: false,
            fourthOption: false,
        })
      
        setIsNextBtn(false)
        setIsDangerTime(false)
        setAutoSelect(false)
        setTime(10)
        setTimeLine(0)
  } 

  

const checkClass =  correctClass;



  return ( 
<div className="quiz_box">
 
        {/* Quiz box Header */}
      <Header isNextBtn={isNextBtn} isDangerTime={isDangerTime} time ={time} timeLine={timeLine} />
   
  <section>

  <DisplayQues userQuestionBank={userQuestionBank} quesTracker={quesTracker} />
    
    <div className="option_list">


      <DisplayOption  allOptions={allOptions[0]}  setAutoSelect= {setAutoSelect} 
                      autoSelect={autoSelect} setCorrectClass={setCorrectClass} 
                      setIsNextBtn={setIsNextBtn}  setIsCorrectAns={ myFirstOption } 
                      isNextBtn={isNextBtn} isCorrectAns={isCorrectAns.firstOption} myOptions={myOptions.firstOption}
                      disply2={disply2} disply={disply} setScore={setScore}
                      score={score} checkClass={checkClass} widthTimer={widthTimer}
                       timer={timer} setCheck={setCheck} theAnswer={theAnswer}
                      answer={answer} setMyOptions={myFirstOption2} />

          <DisplayOption    allOptions={allOptions[1]}  setAutoSelect= {setAutoSelect} 
                      autoSelect={autoSelect} setCorrectClass={setCorrectClass} 
                      setIsNextBtn={setIsNextBtn}  setIsCorrectAns={ mySecondOption } 
                      isNextBtn={isNextBtn} isCorrectAns={isCorrectAns.secondOption} myOptions={myOptions.secondOption}
                      disply2={disply2} disply={disply} setScore={setScore}
                       score={score} checkClass={checkClass} widthTimer={widthTimer}
                        timer={timer} setCheck={setCheck} theAnswer={theAnswer}
                         answer={answer} setMyOptions={mySecondOption2} />

          <DisplayOption    allOptions={allOptions[2]}  setAutoSelect= {setAutoSelect} 
                      autoSelect={autoSelect} setCorrectClass={setCorrectClass} 
                      setIsNextBtn={setIsNextBtn}  setIsCorrectAns={ myThirdOption } 
                      isNextBtn={isNextBtn} isCorrectAns={isCorrectAns.thirdOption} myOptions={myOptions.thirdOption}
                      disply2={disply2} disply={disply} setScore={setScore}
                       score={score} checkClass={checkClass} widthTimer={widthTimer}
                        timer={timer} setCheck={setCheck} theAnswer={theAnswer}
                         answer={answer} setMyOptions={myThirdOption2} />

<DisplayOption    allOptions={allOptions[3]}  setAutoSelect= {setAutoSelect} 
                      autoSelect={autoSelect} setCorrectClass={setCorrectClass} 
                      setIsNextBtn={setIsNextBtn}  setIsCorrectAns={ myFourthOption } 
                      isNextBtn={isNextBtn} isCorrectAns={isCorrectAns.fourthOption} myOptions={myOptions.fourthOption}
                      disply2={disply2} disply={disply} setScore={setScore}
                       score={score} checkClass={checkClass} widthTimer={widthTimer}
                        timer={timer} setCheck={setCheck} theAnswer={theAnswer}
                         answer={answer} setMyOptions={myFourthOption2} />


          </div>

</section>



{/* <!-- Quiz Box Footer --> */}
<Footer userQuestionBank={userQuestionBank} quesTracker={quesTracker} handleNextQuestion={handleNextQuestion} isNextBtn={isNextBtn} />

</div>
  )
}

export default QuizBox