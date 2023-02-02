class Question 
{
    // Points + Text* + Correct Answer + TECHNICAL STUFF...
    constructor (price,row,col)
    {
        this.price=price;
        this.isAnswered=false;
        
        this.col=col;    // X
        this.row=row;    // Y

        // TECHNICAL 
        // this.answeredByUser="Nickname";
    }
}
export {Question}