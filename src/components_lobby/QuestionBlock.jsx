import React, { useEffect, useState, useRef } from "react";
import CustomButton from "../components_mui_based/CustomButton";

import Timer from "./Timer";

function QuestionBlock(props)
{   
    let [timerState,setTimerState] = useState(true);

    return(

        <div className="Question-block">
            <div className="Question-block-text">{
                props.question.current["text"]}
            </div>
            <div className="Question-block-answer" style={{display: props.answerVisibility? "flex" : "none" }}>
                {props.question.current["answer"]}
            </div>
            <div className="Question-block-host-control">
                <CustomButton>
                    Points +
                </CustomButton>
                <CustomButton>
                    Points -
                </CustomButton>
                <CustomButton onClick={()=>{props.callbackOnShowAnswer()}}>
                    Show Answer
                </CustomButton>
                <CustomButton onClick={()=>{props.callbackOnReturnToTable()}}>
                    <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
                </CustomButton>
            </div>
            <div className="Question-block-timer">
                <Timer state={timerState} setState={setTimerState}  />
            </div>
        </div>

    )

}


export default QuestionBlock;