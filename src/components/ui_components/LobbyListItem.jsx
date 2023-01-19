import { useState } from "react";
import SimpleButton from "./SimpleButton";
// 🔑🙂☹️

function LobbyListItem(lobby) {

    return(
        <div className="Lobby-item" id={lobby.id}>
            <div className="Title">{lobby.name}</div>
            <div className="Player-count">{lobby.playersCount}/{lobby.maxPlayers} 🙂</div>
            <div className="With-password">{lobby.private? "🔒" : "🔓"}</div>
            <SimpleButton text="Join"/>
        </div>)
}

export default LobbyListItem;