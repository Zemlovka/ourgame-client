import React from 'react';
import Popup from 'reactjs-popup';

import Modal from './Modal';
// 🔑🙂☹️

function LobbyListItem(lobby) {

    return (
        <div className={"Lobby-item"} id={lobby.id}>
            <div className="Title">{lobby.name}</div>
            <div className="Player-count">{lobby.playersCount}/{lobby.maxPlayers} 🙂</div>
            <div className="With-password">{lobby.private ? "🔒" : "🔓"}</div>
        </div>)
}

export default LobbyListItem;