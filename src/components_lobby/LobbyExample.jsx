
import React from "react";
import { useRef} from "react";

// LOGIC
import { GridOfQuestions } from "../scripts/GridOfQuestions";
import { ChatMessage } from "../scripts/ChatMessage";

// GUI
import QuestionGrid from "./QuestionGrid";
import QuestionCell from "./QuestionCell";

import GameChat from "./GameChat";
import GameControls from "./GameControls";
import GameInfo from "./GameInfo";

import GameMessage from "./GameMessage";


function LobbyExample()
{

    let gridOfQuestions = useRef(new GridOfQuestions(null));
    let chatMessages = useRef(
        [   new ChatMessage("Basic","User #42","Hello World!"),
            new ChatMessage("System","SYSTEM","Hello World!"),
            new ChatMessage("System","SYSTEM","It is a very long message test..."),
            new ChatMessage("Basic","User #42","Hello World! #1"),
            new ChatMessage("Basic","User #42","Hello World! #2"),
            new ChatMessage("System","SYSTEM","Testing..."),
            new ChatMessage("Basic","User #42","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Mauris metus."),
            new ChatMessage("Basic","User #42","Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Mauris metus."),
            new ChatMessage("System","SYSTEM","Testing..."),
            new ChatMessage("Basic","User #42","Hello World! #1"),
            new ChatMessage("Basic","User #42","Hello World! #2"),
            new ChatMessage("System","SYSTEM","Testing..."),
        ]);

    let host= useRef({username:"Host #01", score: 9999});
    let players = useRef(
        [   {username:"User #13", score: 666},
            {username:"User #42", score: 4242},
            {username:"User #69", score: "NICE"},
            {username:"User #02", score: 222},
            {username:"User #03", score: 333},
            {username:"User #04", score: 444},
            
        ]);
    


    return(
        <div className="Wrapper-game">
            <div className="Ingame-box">
                <QuestionGrid
                    gridOfQuestions={gridOfQuestions}
                />
                <GameChat chatData={chatMessages}/>
                <GameInfo
                    host={host}
                    players={players}
                />
                {/* <GameControls type="HOST"/> */}
                <GameControls type="HOST"/>
            </div>
        </div>
    );
}



export default LobbyExample;
