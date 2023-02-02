import Button from '@mui/material/Button';
import React, { useEffect, useState, useRef } from "react";


import CustomButton from '../components_mui_based/CustomButton';

function GameControls(props)
{
    if(props.userMode=="HOST")
    {
        return(
            <div className="Controls-box Host">
                { props.gameState=="SELECT" &&
                    <React.Fragment>
                        <CustomButton>
                            CHANGE SCORE
                        </CustomButton>
                        <CustomButton onClick={()=>{props.callbackOnRoundNext();}}>
                            NEXT ROUND
                        </CustomButton>
                    </React.Fragment>
                }

                { props.gameState=="ANSWER" && // Ожидание ответов...
                    <React.Fragment>
                        {/*
                        <div style={{textAlign: "center", width: "100%", gridArea: "A", height: "2rem"}}>
                            WAITING FOR
                        </div>
                        <div style={{textAlign: "center", width: "100%", gridArea: "B", height: "2rem"}}>
                            ANSWERS
                        </div>

                        <i className="fa-solid fa-eye"></i>
                        <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
                        */}

                        <CustomButton onClick={()=>{props.callbackOnShowAnswer()}}>
                            Open Answer
                        </CustomButton>
                        <CustomButton onClick={()=>{props.callbackOnReturnToTable()}}>
                            Return To Lobby
                        </CustomButton>

                    </React.Fragment>
                }

                <CustomButton><i className="fa-solid fa-pause"></i></CustomButton>
                <CustomButton><i className="fa-solid fa-right-from-bracket"></i></CustomButton>
            </div>   
        )
    }
    else
    {
        return(
            <div className="Controls-box Player">
                { props.gameState=="ANSWER" && 
                    <CustomButton   onClick={()=>{props.callbackOnAnswerSubmit()}}>
                        ANSWER
                    </CustomButton> 
                }
                { props.gameState=="SELECT" && // Ожидание выбора...
                    <div style={{textAlign: "center", width: "100%", gridArea: "A", height: "2rem"}}>
                        WAITING...
                    </div> 
                }
                <CustomButton><i className="fa-solid fa-pause"></i></CustomButton>
                <CustomButton><i className="fa-solid fa-right-from-bracket"></i></CustomButton>
            </div>   
        )
    }



}
export default GameControls;