import React from "react";

import { useNavigate, useParams } from "react-router-dom";

import ReturnButton from "./ui_components/ReturnButton";
import io from 'socket.io-client';
//import io from 'socket.io/node_modules/socket.io-client';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";


function Lobby() {

    const { id } = useParams();
    const { state } = useLocation();
    const { wsUrl } = state;



    /* socket */
    const socket = io(`http://25.74.83.186${wsUrl}`);
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [lastPong, setLastPong] = useState(null);

    useEffect(() => {
        console.log(wsUrl);
        socket.on('connect', () => {
            setIsConnected(true);
        });

        socket.on('disconnect', () => {
            setIsConnected(false);
        });

        socket.on('pong', () => {
            setLastPong(new Date().toISOString());
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('pong');
        };
    }, []);

    const sendPing = () => {
        socket.emit('ping');
    }
    /* socket */



    const navigate = useNavigate();

    return (
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="ProfileMenu">
                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>Lobby {id}</h1>
                    <button onClick={ sendPing }>Send ping</button>
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
