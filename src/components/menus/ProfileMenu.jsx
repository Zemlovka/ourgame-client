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
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.57141 2.14285L3.21427 7.5L8.57141 12.8571L7.49998 15L-1.82561e-05 7.5L7.49998 -3.57628e-06L8.57141 2.14285Z" fill="white"/>
</svg>

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