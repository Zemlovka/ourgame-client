
import PlayerInfo from "./PlayerInfo";


function GameInfo(props)
{
    return(
        <div className="Info-box">
            <PlayerInfo
                isHost={true}
                name={props.host.current.username}
            />
            {
                props.players.current.map(player =>
                    {
                        return(
                            <PlayerInfo
                                name={player.username}
                                score={player.score}
                            />
                        )
                    })
            }
        </div>   
    )


}
export default GameInfo;