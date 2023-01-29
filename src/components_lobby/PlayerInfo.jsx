function PlayerInfo(props)
{       
    return(
        <div className={`${props.isHost? "Player-info Host": "Player-info"}`}>
            <div className="Player-image"></div>
            <div className="Player-name">{props.name}</div>
            <div className="Player-score" hidden={props.isHost}>{props.score}</div>
        </div>   
    )


}
export default PlayerInfo;