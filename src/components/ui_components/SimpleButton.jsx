import React, {useState} from "react";

function SimpleButton(props)
{
    // (?) This allows to change CSS of button without pseudo classes (:hover + :active)
    // (?) All possible states: default / hovered / pressed
    let [currentState,setCurrentState] = useState("default");

    return(
    <button 
        className={props.className+"-"+currentState}
        onMouseEnter={() => setCurrentState("hovered")}
        onMouseLeave={() => setCurrentState("default")}
        onMouseDown={() => setCurrentState("pressed")}
        onMouseUp={() => setCurrentState("default")}
        type={props.type}
        onClick={props.onClick}>
        {props.text}
    </button>
    );
}

SimpleButton.defaultProps = 
{
    className: "Button",
    onClick: () => {console.log("This button doesn't have assigned function!")},
    text: "PRESS ME",
    type: "button",
};

export default SimpleButton;