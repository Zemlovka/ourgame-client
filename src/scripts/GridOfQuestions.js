// TEMP: these imports should be removed with tempData!
import {Theme} from "./Theme.js"
import {Question} from "./Question.js"

class GridOfQuestions 
{
    constructor(data)
    {    
        //console.log("???",data)
        this.themes=[];
        let row=1;
        for (let theme in data)
        {
            let questions=[];
            let col=1;
            for (let question in data[theme]["questions"])
            {
                questions.push(new Question(data[theme]["questions"][question],row,col)) // question = price!
                col++;
            }
            this.themes.push(new Theme(data[theme]["theme"],questions))
            row++;
        }
        //  console.log(">>>", this.themes)

        //questions.push(new Question(question))  


        // maxRowLength is used for styling
        let max=0;
        for (let theme in this.themes)
        {
            //console.log("C",this.data[category].questions.length);
            if(max<this.themes[theme].questions.length)
            {
                max=this.themes[theme].questions.length
            }
        }
        this.maxRowLength=max;
        console.log(">>>", this.themes)

        // Class Functions
        this.getQuestion = function(row,col)
        {
            return this.themes[row].questions[col];
        }

    }

}
export {GridOfQuestions}