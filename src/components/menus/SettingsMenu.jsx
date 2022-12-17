import React from "react";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

import OptionGame from "./settings_options/OptionGame"
import OptionAudio from "./settings_options/OptionAudio"
import OptionGraphics from "./settings_options/OptionGraphics"

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";

function SettingsMenu()
{
    let [selectedOption,setSelectedOption] = useState(<OptionGame/>);

    const navigate = useNavigate(); 
    
    return(
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="SettingsMenu">
                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>Settings</h1>
                </div>

                <div className="Submenu-content">
                    <div className="Settings-options">
                        <SimpleButton text="Game" onClick={() => changeSettingsContentTo("GAME")}/>
                        <SimpleButton text="Graphics" onClick={() => changeSettingsContentTo("GRAPHICS")}/>
                        <SimpleButton text="Audio" onClick={() => changeSettingsContentTo("AUDIO")}/>
                    </div>

                    <div className="Selected-option">
                        {selectedOption}
                    </div>  
                </div>
            </div>
        </div>

    );

    function changeSettingsContentTo(value)
    {
        switch(value)
        {
            case "GAME":
                selectedOption=<OptionGame/>;
                break;
            case "AUDIO":
                selectedOption=<OptionAudio/>;
                break;
            case "GRAPHICS":
                selectedOption=<OptionGraphics/>;
                break;
            default:
        }
        setSelectedOption(selectedOption);

    }


    function returnToMainMenu()
    {           
        console.log("RETURN PRESSED!");
        navigate("/");
    }
}

export default SettingsMenu
