import Button from '@mui/material/Button';
import React, { useEffect, useState, useRef } from "react";


import CustomButton from '../components_mui_based/CustomButton';

function GameControls(props)
{
    
        return(
            <React.Fragment>
                { 
                    ((props.gameState=="SELECT" && props.userMode=="HOST") &&
                        <div className="Controls-box Host">
                            <CustomButton>
                                Change Score
                            </CustomButton>
                            <CustomButton onClick={()=>{props.callbackOnRoundNext();}}>
                                Next Round
                            </CustomButton>
                        </div>)
                }   
                {
                    ((props.gameState == "ANSWER" && props.userMode == "HOST") &&
                    <div className="Controls-box Host">
                        <CustomButton onClick={()=>{props.callbackOnShowAnswer()}}>
                            Open Answer
                        </CustomButton>
                        <CustomButton onClick={()=>{props.callbackOnReturnToTable()}}>
                            Return To Table
                        </CustomButton>
                    </div>)
                }
                {
                    ((props.gameState == "WELCOME" && props.userMode == "HOST") &&
                    <div className="Controls-box Host">
                        <CustomButton   onClick={()=>{props.callbackOnPlayerReady()}}>
                            Ready
                        </CustomButton> 
                    </div>)
                }

                {
                    ((props.gameState == "SELECT" && props.userMode == "PLAYER") &&
                    <div className="Controls-box Player">
                        <div style={{textAlign: "center", width: "100%", gridArea: "A", height: "2rem"}}>
                            Waiting...
                        </div> 
                    </div>)
                }
                {
                    ((props.gameState == "ANSWER" && props.userMode == "PLAYER") &&
                    <div className="Controls-box Player">
                        <CustomButton   onClick={()=>{props.callbackOnAnswerSubmit()}}>
                            Answer
                        </CustomButton> 
                    </div>)
                }
                {
                    ((props.gameState == "WELCOME" && props.userMode == "PLAYER") &&
                    <div className="Controls-box Player">
                        <CustomButton   onClick={()=>{props.callbackOnPlayerReady()}}>
                            Ready
                        </CustomButton> 
                    </div>)
                }

            </React.Fragment>)

}
export default GameControls;