import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import ReturnButton from "./ui_components/ReturnButton";
import io from 'socket.io-client';
//import io from 'socket.io/node_modules/socket.io-client';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";


function Lobby() {

    const { id } = useParams();
    const { state } = useLocation();
    const { wsUrl } = state;
    const socket = useRef(null);


    /* socket */

    //socket.current = io(`http://25.74.83.186${wsUrl}`);
    const [isConnected, setIsConnected] = useState(socket.connected);

    const [lobby, setLobby] = useState({});

    useEffect(() => {

        socket.current = io(`http://25.74.83.186${wsUrl}`);

        socket.current.on('connect', () => {
            setIsConnected(true);
            console.log("socket connected");
        });
        socket.current.on('disconnect', () => {
            setIsConnected(false);
            console.log('socket disconnected');
        });
        socket.current.on('lobby', (lobby) => {
            setLobby(lobby);
            console.log(lobby);
        });

        return () => {
            socket.current.off('connect');
            socket.current.off('disconnect');
            socket.current.off('lobby');
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



    const navigate = useNavigate();

    return (
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="ProfileMenu">
                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>Lobby {id}</h1>
                    {/* 
                    <button onClick={ sendPing }>Send ping</button>
                    <button onClick={ disconnectSocket }>DISCONNECT</button>
                    */}
                </div>

            </div>
        </div>
    );

    function returnToMainMenu() {
        console.log("RETURN PRESSED!");
        navigate(-1);
    }
}

export default Lobby;
