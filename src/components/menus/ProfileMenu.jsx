import React from "react";

import {useNavigate} from "react-router-dom";

import ReturnButton from "../ui_components/ReturnButton";
import { Button } from "@mui/material";



function ProfileMenu()
{

    const navigate = useNavigate(); 

    const logout =() =>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('avatar');
        navigate("/auth");
    }
    /*
    avatar:https://lh3.googleusercontent.com/aPeSCag8eHV8Xfsu2FdRzRrV0KzD3CWkO8jGbvGZSFIvA_5-8BJ6cHh0lkvqXeUYFwDRp03pH3HdqMNv9--Pv_jw0z1USaKyjg=s400
    username: user1
    token:eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzZWxmIiwic3ViIjoidXNlcjEiLCJleHAiOjE2NzQyMDg1NzksImlhdCI6MTY3NDEyMjE3OSwic2NvcGUiOiJST0xFX1VTRVIifQ.r88PnRGU_Hv31Qi3lu-T8cJQr6Y9E_PxkiJzeqbejDj8tLbNCTIlNn35aUCzA7LnhVHzRacqzSS4pAgGvx_VomKGCrRhxrdEqKpOE4dV5yG7e2Rc89YbVQigEY1Sggh4Mi_koGrV6dTs1dIPJY3w4mD5nNDJvbB6bMSb2JUefr85oL-pNflu1X0Kd3M682RRpuT7M4VWWqFSvIP15wcr-njm57YXZuTZ1sYCwpSGzy-MmaOEoOvMPpQtPqKzE7Sy2qNgF2V7WafY-yxzgzJmcRBdJHH-oTVKo9v3mN6Ip4B-9H9UKBoYzO8nGq2iFfxAt8FrNfSE7r5iAb0XO-I3QA
    */

    return(
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="ProfileMenu">

                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>My Profile</h1>
                </div>

                <div className="Submenu-content">
                        <div className="Profile-info">
                            <div className="Profile-pic">
                            <img  src={localStorage.getItem('avatar')}></img>
                            </div>
                            <h2>{localStorage.getItem('username')}</h2>
                            <Button variant="text" size="small" onClick={() =>{logout()}}>Not you?</Button>
                        </div>
                        <div className="Profile-stats">
                            <h2>Statistics</h2>
                            <div className="Stats-grid">
                                <div className="Stat-label">Games played total</div>
                                <div className="Stat-value">200</div>

                                <div className="Stat-label">Percentage of wins</div>
                                <div className="Stat-value">45 %</div>

                                <div className="Stat-label">Average reaction time</div>
                                <div className="Stat-value">20ms</div>

                                <div className="Stat-label">First game played</div>
                                <div className="Stat-value">01-01-2020</div>

                                <div className="Stat-label">Last game played</div>
                                <div className="Stat-value">19-01-2023</div>
                            </div>
                        </div>
                </div>

            </div>
        </div>
    );

    function returnToMainMenu()
    {           
        console.log("RETURN PRESSED!");
        navigate("/");
    }
}

export default ProfileMenu;
