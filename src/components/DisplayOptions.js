import React from 'react'
import tickIcon from "../check-markE.jpg"
import crossIcon from "../x-buttonE.jpg"

const DisplayOption = ({answer,allOptions,timer,widthTimer,checkClass,score,setScore,disply,disply2 ,myOptions,setMyOptions,isCorrectAns,isNextBtn,setIsCorrectAns,setIsNextBtn,setCorrectClass,autoSelect,setAutoSelect,setCheck,theAnswer}) => {
 
  // ${isCorrectAns && checkClass}
 
  return (
    <div className={`option ${isNextBtn && "inactive"}  ${(autoSelect && (theAnswer === allOptions )) && "green"} `}  onClick={()=> {
        setIsNextBtn(true)
        setMyOptions()
        setIsCorrectAns()
        clearInterval(timer.current)
        clearInterval(widthTimer.current)

        if(allOptions === answer) {
          
          setScore(score + 1)
          setCheck(tickIcon)
          setCorrectClass(`correct`)

        }
        
        else{
          setCheck(crossIcon)
          setCorrectClass(`incorrect`)
          setAutoSelect(true)
        }
        // console.log(22);
      }} ><span>{allOptions} </span> {myOptions && disply } {(autoSelect && (theAnswer === allOptions )) && disply2} </div>


  )
}

export default DisplayOption;