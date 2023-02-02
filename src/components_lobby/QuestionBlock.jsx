import React, { useEffect, useState, useRef } from "react";

import Timer from "./Timer";

function QuestionBlock(props)
{   
    let [timerState,setTimerState] = useState(true);

    return(

        <div className="Question-block">
            <div className="Question-block-text">{
                props.question.current["text"]}
            </div>
            <div className="Question-block-answer" style={{display: !timerState? "flex" : "none" }}>
                {props.question.current["answer"]}
            </div>
            <div className="Question-block-timer">
                <Timer state={timerState} setState={setTimerState}  />
            </div>
        </div>

    )

}


export default QuestionBlock;