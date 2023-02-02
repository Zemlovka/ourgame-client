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
            { true && 
                <div className="Question-block-host-controls">
                    <div className="Answering-label">
                        NOW ANSWERING:
                    </div>
                    <div className="Answering-player">
                        User #42
                    </div>
                    <div className="Answering-label">
                        CORRECT ANSWER:
                    </div>
                    <div className="Answering-label">
                        Simple
                    </div>
                    <CustomButton onClick={()=>{props.callbackOnChangeScore(null,400)}}>
                        Points +
                    </CustomButton>
                    <CustomButton onClick={()=>{props.callbackOnChangeScore(null,-400)}}>
                        Points -
                    </CustomButton>
                </div>
            }

            <div className="Question-block-timer">
                <Timer state={timerState} setState={setTimerState}  />
            </div>
        </div>

    )

}


export default QuestionBlock;