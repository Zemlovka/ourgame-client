class Question 
{
    // Points + Text* + Correct Answer + TECHNICAL STUFF...
    constructor (price,content,answer)
    {
        this.price=price;
        this.content=content;
        this.answer=answer;

        // TECHNICAL 
        this.isAnswered=false;
        // this.answeredByUser="Nickname";
    }
}
export {Question}