
import React, { useEffect, useState, useRef } from "react";

function QuestionCell(props)
{
    return(
    
            <div
                className="Question-field-cell Question"
                onClick={()=>{console.log("Stop Clicking!!!")}}
            >
                {props.price}
            </div>
    )

}


export default QuestionCell;