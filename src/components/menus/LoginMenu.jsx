import React, {useState} from "react";

import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";

function LoginMenu({swapFunction,submitFunction})
{
    // (?) Inputed Data is stored as Dictionary
    let [formInput, setFormInput] = useState({});

    return(
        <div className="Auth-box">
            <h1 className="Title">Sign in</h1>

            <form className="Auth-form" onSubmit={submitFunction(formInput)}>
                <SimpleInput 
                    type="text"
                    className="Input-field"
                    placeholder="Username"
                    onChange={(event) => setFormInputValue( "username", event.target.value,)}
                    />
                 <SimpleInput 
                    type="password"
                    className="Input-field"
                    placeholder="Password"
                    suggested="current-password"
                    onChange={(event) => setFormInputValue( "password", event.target.value)}
                    />                   
                <SimpleButton className="Button" type="submit" text="Submit"/>
            </form>
            
            <div className="Label">Not registered yet?
                <span className="Link" onClick={swapFunction}> Sign Up</span>
            </div>
        </div>
    );


     // (?) Changing key to new value (or adding a new key with value)
    function setFormInputValue(key,value)
    {
        setFormInput((formInput) => ({...formInput, [key]: value}));
    }
    
}

export default LoginMenu;