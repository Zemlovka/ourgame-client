import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import ReturnButton from "./ui_components/ReturnButton";
import io from 'socket.io-client';
//import io from 'socket.io/node_modules/socket.io-client';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";


// LOGIC
import { GridOfQuestions } from "../scripts/GridOfQuestions";
import { ChatMessage } from "../scripts/ChatMessage";

// GUI
import QuestionGrid from "../components_lobby/QuestionGrid";
import QuestionCell from "../components_lobby/QuestionCell";
import QuestionBlock from "../components_lobby/QuestionBlock";
import GameChat from "../components_lobby/GameChat";
import GameControls from "../components_lobby/GameControls";
import GameInfo from "../components_lobby/GameInfo";
import GameMessage from "../components_lobby/GameMessage";
import CustomCircleButton from "../components_mui_based/CustomCircleButton";




function useForceUpdate()
{
    console.log("FORCE UPDATE")
    const [value, setValue] = useState(0);
    return () => setValue(value => value + 1);
}




function Lobby() {

    const { id } = useParams();
    const { state } = useLocation();
    const { wsUrl } = state;
    const socket = useRef(null);







    /* socket */

    //socket.current = io(`http://25.74.83.186${wsUrl}`);
    const [isConnected, setIsConnected] = useState(socket.connected);

    //const [lobby, setLobby] = useState({});
    let lobbyData = useRef(null);

    useEffect(() => {

        socket.current = io(`http://25.74.83.186${wsUrl}`,
         {
            transports: ["polling","websocket"], // use WebSocket first, if available\\
            extraHeaders: {
                "username": "user"
              }

          });
        
        // !!!
        //socket.current = io(`http://146.102.116.23${wsUrl}`);


        // ON ANY EVENT RECIEVED
        socket.current.onAny((eventName, ...args) => {
            console.log("Recieved",eventName,"with args",args);
            
        });

        // ON ANY EVENT RECIEVED ALTERNATIVE ?
        /*
        socket.current.on("*",(eventName, args) => {
            console.log("Recieved*",eventName,"with args",args);
                    
        });
        */

        // ON ANY EVENT EMITTED ?
        /*
        socket.current.prependAny((eventName, ...args) => {
            console.log("Emitted",eventName,"with args",args);
            
        });
        */

        // SOCKET TEST
        socket.current.on('test', () => {
            console.log("socket works");
        });



        socket.current.on('connect', (...args) => {
            setIsConnected(true);
            console.log("socket connected",args);
        });

        socket.current.on("map", (map)=>
        {
            console.log("map recieved",map);
            dataAsJSON.current=map;
            console.log("current data",dataAsJSON.current);
            gridOfQuestions.current = new GridOfQuestions(dataAsJSON.current["rounds"][gameRound.current].themes);
            forceUpdate();
        }
        )
        socket.current.on('disconnect', () => {
            setIsConnected(false);
            console.log('socket disconnected');
        });
        socket.current.on('lobby', (lobby) => {
            //setLobby(lobby);
            lobbyData.current=lobby
            console.log("LOBBY >",lobby);
            updateLobbyData()
        });


        socket.current.on("ready",(ready) => {
            console.log("Ready Recieved");
            console.log("READY >",ready);
        });


        

        return () => {
            socket.current.off('connect');
            socket.current.off('disconnect');
            socket.current.off('lobby');
            socket.current.off('ready');

            socket.current.removeAllListeners();

            //socket.current.disconnect();
            console.log("useEff return");
        };
    }, []);

    

    /*
    const sendPing = () => {
        socket.current.emit('ping');
    }
    const disconnectSocket = () => {
        console.log("Disconnecting socket...");
        socket.current.disconnect();
        setIsConnected(false);
    }
    */
    /* socket */
    function updateLobbyData()
    {
        if(lobbyData.current!=null)
        {  
            host.current= {username:lobbyData.current.host.username, score: -1}
            let temp=[];
            let count=0;
            for (let player of lobbyData.current.players)
            {
                temp.push({username: player.username, score: 0})
                if(player.ready)
                {
                    count++;
                }
            }
            players.current=[...temp];

            console.log("Is all ready?");
            if(lobbyData.current.host.ready && count==2)
            {
                console.log("Game Started!");
                setGameState("SELECT");
            }
         

        }
        forceUpdate();
    }
  

    // FORCE UPDATE
    let forceUpdate = useForceUpdate() ;
    // NAVIGATION
    let navigate = useNavigate(); 

    // STATES
    let [userMode,  setUserMode]        = useState("PLAYER");     // HOST or PLAYER
    let [canSelect, setCanSelect]       = useState(true);         // false on connect
    let [gameState, setGameState]       = useState("WELCOME");     // SELECT or ANSWER or WELCOME
    let [answerState,setAnswerState]    = useState(false);          // false -> not given, true -> answer has been already pressed!
    let [answerVisibility, setAnswerVisibility ] = useState(false); // true -> answer is visible
    let [userState, setUserState]       = useState(false);          // true -> ready

    // ANSWER QUEUE
    let answerQueue = useRef({player: "Nickname 1"},{player: "Nickname 2"},)

    // QUESTIONS
    
    let dataAsJSON = useRef(null); //require("./../GameMap.json");  // JSON FILE GOES HERE
    let gameRound = useRef(0);
    let gridOfQuestions = useRef(null);
    let selectedQuestion = useRef({answer: "Simple", text: "Opposite of Complex?"})

    // CHAT
    let chatMessages = useRef([new ChatMessage("System","System","TODO: Implement Chat"),new ChatMessage("System","System","Message Example")]);

    // LOBBY MEMBERS
    let host= useRef( {username:"Host #00", score: -1}); // {username:"Host #00", score: -1}
    let players = useRef([]);

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
        setGameState("SELECT");
    }
    // Function ChangeScore
    function onChangeScore(player,value)
    {
        console.log("Changing points for",player,"-->",value)
    }
    // READY
    function onReadyPressed()
    {
        console.log("READY PRESSED!");
        //console.log("?",wsUrl);
        console.log("LOBBY DATA >",lobbyData.current);
        console.log("Changed from",userState,"to",!userState);
        setUserState(prevState => {return !prevState})
        //console.log("SOCKET",socket.current);
        //socket.current.emit("ready", JSON.stringify([userState]));
        //socket.current.emit("ready", JSON.stringify(null));
        //socket.current.emit("ready", JSON.stringify([{"ready":userState}]));
        socket.current.emit('ready', {"ready": true});
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
        gridOfQuestions.current=new GridOfQuestions(dataAsJSON.current["rounds"][gameRound.current].themes);
        
        forceUpdate();

        // socket.emit("round_next");        
    }

    return(
        <div className="Wrapper-game">
            <div className="Ingame-box">

                <div className="Header-left">
                    <CustomCircleButton fontSize="1.5rem" diameter="42px" onClick={returnToMainMenu}>
                        <i className="fa-sharp fa-solid fa-angle-left"></i>
                    </CustomCircleButton>
                    <div className="Info-state">
                        { gameState=="WELCOME"? "Waiting for players..." : "Game in progress"}
                    </div>
                </div>

                <div className="Header-right">
                    <div className="Info-name">
                        {lobbyData.current!= null ? lobbyData.current.name : ""}
                    </div>
                    <CustomCircleButton fontSize="1.5rem" diameter="42px" onClick={() => { }}>
                        <i className="fa-solid fa-pause"></i>
                    </CustomCircleButton>
                </div>


                { gameState=="SELECT" && 
                    <QuestionGrid
                        gridOfQuestions={gridOfQuestions}
                        canBeClicked={canSelect}
                        callbackOnCellClicked={(row,col)=>{onCellClicked(row,col);}}
                    />
                }
                { gameState=="ANSWER" && 
                    <QuestionBlock
                        userMode={userMode}
                        question={selectedQuestion}
                        answerVisibility={answerVisibility}
                        callbackOnChangeScore={(player,value)=>{onChangeScore(player,value)}}
                    />
                }
                { gameState=="WELCOME" && 
                    <div className="Welcome">
                        <div className="Welcome-label">
                            Hello!
                        </div>
                        <div className="Welcome-label">
                            Please press READY button and wait until ohter players will do the same...
                        </div>
                    </div>
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
                    callbackOnReadyPressed={()=>{onReadyPressed();}}
                />
            </div>
        </div>
    );

    function returnToMainMenu() {
        console.log("RETURN PRESSED!");
        navigate("/");
      }
}

export default Lobby;
