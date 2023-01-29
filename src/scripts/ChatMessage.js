class ChatMessage 
{
    // Message type (System/Basic) + Author + Text
    constructor(type,author,content)
    {
        this.type=type;
        this.author=author;
        this.content=content;
    }


}
export {ChatMessage}