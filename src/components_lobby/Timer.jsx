import React, { useState, useEffect, useRef } from "react";
import CustomButton from "../components_mui_based/CustomButton";

function Timer(props)
{
    let [timeSeconds,setTimeSeconds]=useState(13);   // Initial time
    let timeInterval = useRef(null); 
    //let [timeRunOut,setTimeRunOut] = useState(false);

    useEffect(
        () => 
        {
            if(props.state)
            {
                timeInterval.current = setInterval(() => 
                    {setTimeSeconds(prevTS => {return prevTS-1})} ,1000);  // 1000ms
                    // STRICT MODE 0.5sec   NORMAL MODE 1sec
                    // STRICT MODE не работает с таймером тк рендер два раза идет
            }
            else
            {   
                clearInterval(timeInterval.current);
            }
            
        },[props.state])

    useEffect(
        ()=>
        {
            if(timeSeconds<=0)
            {
                props.setState(false);
                console.log("NO TIME!");
            }

        },[timeSeconds]
    )

    function leadingZero(value)
    {   
        //if(value<0) {value==0};
        if(value<10) {return "0"+value;} else {return value;}
    }
    
    return(
        <div className="Time-value" id="End-timer">
            <CustomButton onClick={()=>{props.setState(prevState => {return !prevState})}}>
            {leadingZero(Math.floor(timeSeconds/60))+":"+leadingZero(timeSeconds%60)}
            </CustomButton>
        </div>
    )

}

export default Timer;