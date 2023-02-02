
import React from "react";
import { useRef, useState,useEffect} from "react";

// LOGIC
import { GridOfQuestions } from "../scripts/GridOfQuestions";
import { ChatMessage } from "../scripts/ChatMessage";

// GUI
import QuestionGrid from "./QuestionGrid";
import QuestionCell from "./QuestionCell";
import QuestionBlock from "./QuestionBlock";
import GameChat from "./GameChat";
import GameControls from "./GameControls";
import GameInfo from "./GameInfo";
import GameMessage from "./GameMessage";



function useForceUpdate()
{
    console.log("FORCE UPDATE")
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}


function LobbyExample()
{
    // FORCE UPDATE
    let forceUpdate = useForceUpdate() ;

    // STATES
    let [userMode,  setUserMode]        = useState("HOST");     // HOST or PLAYER
    let [canSelect, setCanSelect]       = useState(true);         // false on connect
    let [gameState, setGameState]       = useState("SELECT");     // SELECT or ANSWER
    let [answerState,setAnswerState]    = useState(false);          // false -> not given, true -> answer has been already pressed!
    let [answerVisibility, setAnswerVisibility ] = useState(false); // true -> answer is visible

    // ANSWER QUEUE
    let answerQueue = useRef({player: "Nickname 1"},{player: "Nickname 2"},)

    // QUESTIONS
    let dataAsJSON = require("./../GameMap.json");  // JSON FILE GOES HERE
    let gameRound = useRef(0);
    let gridOfQuestions = useRef(new GridOfQuestions(dataAsJSON["rounds"][gameRound.current].themes));
    let selectedQuestion = useRef({answer: "Simple", text: "Opposite of Complex?"})

    // CHAT
    let chatMessages = useRef([]);

    // LOBBY MEMBERS
    let host= useRef({username:"Host #01", score: 9999});
    let players = useRef(
        [   {username:"User #13", score: 666},
            {username:"User #42", score: 4242},
            {username:"User #69", score: "NICE"},
            {username:"User #02", score: 222},
            {username:"User #03", score: 333},
            {username:"User #04", score: 444},
            
        ]);

    // EVENTS
    function onUserConnect()
    {

    }
    function onUserDisonnect()
    {
        
    }

 

    // Function Reveals Answer (only HOST)
    function onShowAnswer()
    {
        setAnswerVisibility(true);
    }
    // Function Returns to Table (only HOST)
    function onReturnToTable()
    {
        setGameState("SELECT")
    }
    // Function ChangeScore
    function onChangeScore(player,value)
    {
        console.log("Changing points for",player,"-->",value)

    }




    // Function is called when some cell is selected
    function onCellClicked(row,col) // 1...N
    { 
        console.log(gridOfQuestions.current.getQuestion(row-1,col-1))

        gridOfQuestions.current.getQuestion(row-1,col-1).isAnswereds=true;
        setGameState("ANSWER");
        // socket.emit("question_opened", [row-1,col-1]);
    }

    // Function is called when PLAYER pressed answer button
    function onAnswerSubmit()
    {
        console.log("ANSWER BUTTON PRESSED!");
        setAnswerState(true);
    }
    useEffect(
        ()=>
        {
            if(answerState) // Если ИГРОК нажимает на ответ на конкретный вопрос ВПЕРВЫЕ, то только тогда мы отправляем ЭМИТ
            {
                // socket.emit("answer_submited", player);  // Я думаю, что ответ должен будет добавиться в очередь других ответов
            }

        },[answerState]
    )

    function onRoundNext()
    {
        console.log("NEXT BUTTON PRESSED!");
        gameRound.current+=1;
        gridOfQuestions.current=new GridOfQuestions(dataAsJSON["rounds"][gameRound.current].themes);
        forceUpdate();

        // socket.emit("round_next");        
    }

    return(
        <div className="Wrapper-game">
            <div className="Ingame-box">
                { gameState=="SELECT" && 
                    <QuestionGrid
                        gridOfQuestions={gridOfQuestions}
                        canBeClicked={canSelect}
                        callbackOnCellClicked={(row,col)=>{onCellClicked(row,col);}}
                    />
                }
                { gameState=="ANSWER" && 
                    <QuestionBlock
                        question={selectedQuestion}
                        answerVisibility={answerVisibility}
                        callbackOnChangeScore={(player,value)=>{onChangeScore(player,value)}}
                    />
                }

                <GameChat chatData={chatMessages}/>
                <GameInfo
                    host={host}
                    players={players}
                />
                <GameControls
                    userMode={userMode}
                    gameState={gameState}

                    callbackOnAnswerSubmit={()=>{onAnswerSubmit();}}
                    callbackOnRoundNext={()=>{onRoundNext();}}
                    callbackOnShowAnswer={()=>{onShowAnswer();}}
                    callbackOnReturnToTable={()=>{onReturnToTable();}}
                />
            </div>
        </div>
    );
}


export default LobbyExample;
