import React from "react";

import {useNavigate} from "react-router-dom";

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
            <div className="ProfileMenuBox">
                <button onClick={returnToMainMenu} className="RoundReturnButton">
                    &lt;
                </button>

                <h1>My Profile</h1>
                <div>{userData.username}</div>
                <div>{userData.profileImage}</div>
                <div>WINS: {userData.gamesWon}</div>
                <div>ALL: {userData.gamesTotal}</div>
                <div>WIN RATIO: {calculateWinRation(userData.gamesWon,userData.gamesTotal)} %</div>
                <div>AVERAGE REACTION: {calculateAvgReactionTime(userData.reactionTimeTotal,userData.questionsAnswered)} sec</div>
                <div>FIRST GAME: {userData.gameFirst}</div>
                <div>LAST GAME: {userData.gameLast}</div>
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