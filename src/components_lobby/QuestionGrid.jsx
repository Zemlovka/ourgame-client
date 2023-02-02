import React, { useEffect, useState, useRef } from "react";

import QuestionCell from "./QuestionCell";



function QuestionGrid(props)
{

   function generateTemplateColumns(numberOfCols)
   {
        let style="3fr"
        for (let i = 0; i < numberOfCols; i++) 
        {
            style = style + " 1fr"
        }
        console.log(style);
        return style;
   }


    return(
        <div className="Question-grid" style={
            { gridTemplateColumns: generateTemplateColumns(props.gridOfQuestions.current.maxRowLength)}}>
            {
                 props.gridOfQuestions.current.data.map(category =>
                    {
                        return(
                            <React.Fragment>
                                {/* А ЧТО ТАК МОЖНО БЫЛО?*/}
                                <div className="Question-grid-cell Category">
                                    {category.name}
                                </div>
                                {
                                    category.questions.map(question =>
                                    {
                                        return(
                                                <QuestionCell
                                                    price={question.price}
                                                />
                                                )})
                                }
                            </React.Fragment>
                        )
                    })
            }
        </div>
    );




}
export default QuestionGrid;