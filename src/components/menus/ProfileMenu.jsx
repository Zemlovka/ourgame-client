import React from "react";

import {useNavigate} from "react-router-dom";

import ReturnButton from "../ui_components/ReturnButton";



function ProfileMenu()
{

    const navigate = useNavigate(); 

    // (?) User Data Placeholder
    let userData=
    {
        username: localStorage.getItem('username'),
        profileImage: localStorage.getItem('avatar'), // (?) Some Enum
        // (?) STATS
        gamesWon: 13,
        gamesTotal: 42,

        questionsAnswered: 222,
        reactionTimeTotal: 345.67,  // (?) Time in Seconds

        gameLast: "12-12-2022", // (?) Date or DateTime
        gameFirst: "11-12-2022"
    }
    // (?) Un-used functions
    /*
    function calculateWinRation(won,all)
    {
        // [!] TODO: Zero Division Exception
        return String(Math.floor(won/all*10000)/100);
    }

    function calculateAvgReactionTime(time,questions)
    {
        // [!] TODO: Zero Division Exception
        return String(Math.floor(time/questions*100)/100);
    }

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
                            <img className="Profile-pic" src={localStorage.getItem('avatar')}></img>
                            <h2>{localStorage.getItem('username')}</h2>
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
