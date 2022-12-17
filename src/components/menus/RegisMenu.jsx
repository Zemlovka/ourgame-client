import React, {useState} from "react";

import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";

function RegisMenu({swapFunction,submitFunction})
{
    // (?) Data stored as Dictionary
    let [formInput, setFormInput] = useState({});

    return(
        <div className="Auth-box">
            <h1 className="Title">Sign up</h1>

            <form className="Auth-form" onSubmit={submitFunction(formInput)}>
                <SimpleInput 
                    type="text"
                    className="Input-field"
                    placeholder="New Username"
                    onChange={(event) => setFormInputValue( "username", event.target.value,)}
                    />
                 <SimpleInput 
                    type="password"
                    className="Input-field"
                    placeholder="New Password"
                    onChange={(event) => setFormInputValue( "password", event.target.value)}
                    />                        
                <SimpleButton className="Button" type="submit" text="Submit"/>
            </form>
            
            <div className="Label">Already registered?
                <span className="Link" onClick={swapFunction}> Sign In</span>
            </div>
        </div>
    );

    function setFormInputValue(key,value)
    {
        setFormInput((formInput) => ({...formInput, [key]: value}));
    }
}

export default RegisMenu;

