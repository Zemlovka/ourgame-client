import GameMessage from "./GameMessage";

function GameChat(props)
{
    return(
        <div className="Chat-box">
            {
                props.chatData.current.map(message =>
                    {
                        return(
                            <GameMessage
                                type={message.type}
                                author={message.author}
                                content={message.content}
                            />)   
                    })
            }
        </div>   
    )


}
export default GameChat;