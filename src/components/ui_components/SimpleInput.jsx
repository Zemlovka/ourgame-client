import React, { useState } from "react";

function SimpleInput(props) {
  // (?) All possible states: default / focused
  let [currentState, setCurrentState] = useState("default");
  

  return (
    <div className={props.className}>

      <input
        className={props.className + "-" + currentState}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onFocus={() => setCurrentState("focused")}
        onBlur={() => setCurrentState("default")}
        
      />
    </div>
  );
}

SimpleInput.defaultProps = {
  className: "Input-field",
  type: "text",
  placeholder: "Lorem ipsum!",
};

export default SimpleInput;
