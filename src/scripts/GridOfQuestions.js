// TEMP: these imports should be removed with tempData!
import {Category} from "./Category.js"
import {Question} from "./Question.js"

class GridOfQuestions 
{
    constructor(data)
    {    

        // Example 1
        let tempData1=
        [
            new Category("Many Questions",
                [
                    new Question(100,"Question A?","Question A"),
                    new Question(200,"Question B?","Question B"),
                    new Question(300,"Question C?","Question C"),
                    new Question(400,"Question D?","Question D"),
                    new Question(500,"Question E?","Question E"),
                    new Question(600,"Question F?","Question F"),
                    new Question(700,"Question G?","Question G"),
                ]),
            new Category("Examples",
                [
                    new Question(200,"Example A?","Example A"),
                    new Question(400,"Example B?","Example B"),
                    new Question(800,"Example C?","Example C"),
                    new Question(1600,"Example D?","Example D"),
                    new Question(500,"Question E?","Question E"),
                    new Question(600,"Question F?","Question F"),
                    new Question(700,"Question G?","Question G"),
                ]),
            new Category("Examples #2",
                [
                    new Question(200,"Example A?","Example A"),
                    new Question(400,"Example B?","Example B"),
                    new Question(800,"Example C?","Example C"),
                    new Question(1600,"Example D?","Example D"),
                    new Question(500,"Question E?","Question E"),
                    new Question(600,"Question F?","Question F"),
                    new Question(700,"Question G?","Question G"),
                ]),
            new Category("Tests",
                [
                    new Question(101,"Test A?","Test A"),
                    new Question(202,"Test B?","Test B"),
                    new Question(303,"Test C?","Test C"),
                    new Question(404,"Test D?","Test D"),
                    new Question(500,"Question E?","Question E"),
                    new Question(600,"Question F?","Question F"),
                    new Question(700,"Question G?","Question G"),
                ]),
            new Category("Tests #2",
                [
                    new Question(101,"Test A?","Test A"),
                    new Question(202,"Test B?","Test B"),
                    new Question(303,"Test C?","Test C"),
                    new Question(404,"Test D?","Test D"),
                    new Question(500,"Question E?","Question E"),
                    new Question(600,"Question F?","Question F"),
                    new Question(700,"Question G?","Question G"),
                ]),
            new Category("Tests #3",
                [
                    new Question(101,"Test A?","Test A"),
                    new Question(202,"Test B?","Test B"),
                    new Question(303,"Test C?","Test C"),
                    new Question(404,"Test D?","Test D"),
                    new Question(500,"Question E?","Question E"),
                    new Question(600,"Question F?","Question F"),
                    new Question(700,"Question G?","Question G"),
                ]),
        ];

         // Example 2
         let tempData2=
         [
             new Category("Many Questions",
                 [
                     new Question(100,"Question A?","Question A"),
                     new Question(200,"Question B?","Question B"),
                     new Question(300,"Question C?","Question C"),
                     new Question(400,"Question D?","Question D"),
                 ]),
             new Category("Examples",
                 [
                     new Question(200,"Example A?","Example A"),
                     new Question(400,"Example B?","Example B"),
                     new Question(800,"Example C?","Example C"),
                     new Question(1600,"Example D?","Example D"),
                 ]),
             new Category("Examples #2",
                 [
                     new Question(200,"Example A?","Example A"),
                     new Question(400,"Example B?","Example B"),
                     new Question(800,"Example C?","Example C"),
                     new Question(1600,"Example D?","Example D"),
                 ]),
             new Category("Tests",
                 [
                     new Question(101,"Test A?","Test A"),
                     new Question(202,"Test B?","Test B"),
                     new Question(303,"Test C?","Test C"),
                     new Question(404,"Test D?","Test D"),
 
                 ]),
         ];       



        



        this.getQuestion = function(row,col)
        {
            return this.data[row].questions[col];
        }

        this.data=tempData2;

        // maxRowLength is used for styling
        let max=0;
        for (let category in this.data)
        {
            //console.log("C",this.data[category].questions.length);
            if(max<this.data[category].questions.length)
            {
                max=this.data[category].questions.length
            }
        }
        this.maxRowLength=max;
    }

}
export {GridOfQuestions}