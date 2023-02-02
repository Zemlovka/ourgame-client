
import React, { useEffect, useState, useRef } from "react";

import CustomButton from "../components_mui_based/CustomButton";


function QuestionCell(props)
{

    function onClickEvent()
    {
        if (props.canBeClicked && ! props.isAnswered)
        {
            console.log("Cell",props.row,props.col,"was clicked!");
            props.callbackOnCellClicked(props.row,props.col);
        }
        else 
        {console.log("No click!");}
    }


    return(
    
            <CustomButton
                className="Question-field-cell Question"
                borderRadius="0"
                canBeClicked={props.canBeClicked && ! props.isAnswered}
                onClick={()=>{onClickEvent()}}
            >
                {props.price}
            </CustomButton>
    )

}


export default QuestionCell;