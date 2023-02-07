import React from "react";

import {useNavigate} from "react-router-dom";

import ReturnButton from "../ui_components/ReturnButton";
import { Button } from "@mui/material";
import CustomCircleButton from "../../components_mui_based/CustomCircleButton";


function ProfileMenu()
{

    const navigate = useNavigate(); 

    const logout =() =>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('avatar');
        navigate("/auth");
    }
    return(
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="ProfileMenu">

                <div className="Submenu-header">
                    <CustomCircleButton fontSize="1.5rem" diameter="42px" onClick={returnToMainMenu}>
                        <i className="fa-sharp fa-solid fa-angle-left"></i>
                    </CustomCircleButton>
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
