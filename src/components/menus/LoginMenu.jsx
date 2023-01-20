import React, {useState} from "react";

import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import AuthTextField from "../ui_components/AuthTextField";

function LoginMenu({swapFunction,submitFunction})
{
    // (?) Inputed Data is stored as Dictionary
    let [formInput, setFormInput] = useState({});

    return(
        <div className="Auth-box">
            <h1 className="Title">Sign in</h1>

            <form className="Auth-form" onSubmit={submitFunction(formInput)}>

                {/*              <TextField
     
                
                autoComplete="off"
                  onChange={handleInputChange}
                label="Lobby's name"
                variant="standard"
              /> */}

                <AuthTextField 
                    id="standard-basic-name"
                    name="name"
                    placeholder="Username"
                    onChange={(event) => setFormInputValue( "username", event.target.value,)}
                    />
                 <AuthTextField 
                    id="standard-basic-password"
                    name="password"
                    placeholder="Password"
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