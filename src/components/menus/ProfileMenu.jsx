import React from "react";

import {useNavigate} from "react-router-dom";

import ReturnButton from "../ui_components/ReturnButton";

function ProfileMenu()
{

    const navigate = useNavigate(); 

    // (?) User Data Placeholder
    let userData=
    {
        username: "John Doe",
        profileImage: "IMAGE_DEFAULT", // (?) Some Enum
        // (?) STATS
        gamesWon: 13,
        gamesTotal: 42,

        questionsAnswered: 222,
        reactionTimeTotal: 345.67,  // (?) Time in Seconds

        gameLast: "12-12-2022", // (?) Date or DateTime
        gameFirst: "11-12-2022"
    }

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



    return(

        <div className="Menu-container">
            <div className="Fancy-submenu">

                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>My Profile</h1>
                </div>

                <div className="Profile-content">
                        <div className="Profile-info">
                            
                            <h2>Player Name</h2>
                        </div>
                        <div className="Profile-stats">
                            <h2>Statistics</h2>
                            <div className="Stats-grid">
                                <div className="Stat-label">Games played total</div>
                                <div className="Stat-value">9999</div>

                                <div className="Stat-label">Percentage of wins</div>
                                <div className="Stat-value">99 %</div>

                                <div className="Stat-label">Average reaction time</div>
                                <div className="Stat-value">9999 ms</div>

                                <div className="Stat-label">First game played</div>
                                <div className="Stat-value">99-99-9999</div>

                                <div className="Stat-label">Last game played</div>
                                <div className="Stat-value">99-99-9999</div>
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