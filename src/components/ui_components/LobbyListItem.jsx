import SimpleButton from "./SimpleButton";
// 🔑🙂☹️

function LobbyListItem(props)
{
    return(
        <div className="Lobby-item">
            <div className="Title">Lobby title</div>
            <div className="Player-count">5/6 🙂</div>
            <div className="With-password">🔑</div>
            <SimpleButton text="Join"/>
        </div>)
}

export default LobbyListItem;