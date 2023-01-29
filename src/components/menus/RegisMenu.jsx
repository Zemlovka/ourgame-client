import React, {useState} from "react";

import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";

import AuthTextField from "../../components_mui_based/AuthTextField";
import CustomButton from "../../components_mui_based/CustomButton";

function RegisMenu({swapFunction,submitFunction})
{
    // (?) Data stored as Dictionary
    let [formInput, setFormInput] = useState({});

    return(
        <div className="Auth-box">
            <h1 className="Title">Sign up</h1>

            <form className="Auth-form" onSubmit={submitFunction(formInput)}>
            <AuthTextField 
                    id="standard-basic-name"
                    name="name"
                    placeholder="New Username"
                    onChange={(event) => setFormInputValue( "username", event.target.value,)}
                    />
                 <AuthTextField 
                    id="standard-basic-password"
                    name="password"
                    placeholder="Your Password"
                    onChange={(event) => setFormInputValue( "password", event.target.value)}
                    />     
                                          
                <CustomButton type="submit">Submit</CustomButton>
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

