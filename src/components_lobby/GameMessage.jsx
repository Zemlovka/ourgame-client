function GameMessage(props)
{
    return(
        <div className={`Message-container ${props.type}`}>
            {/* <img scr={props.author.avatar}></img> */}
            <div className="Message-text">
                {
                    props.type==="Basic" ? props.author+": "+props.content : props.content
                }
            </div>
        </div>   
    )


}
export default GameMessage;