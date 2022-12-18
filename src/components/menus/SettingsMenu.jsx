import React from "react";

import {useState} from "react";
import {useNavigate} from "react-router-dom";

import OptionGame from "./settings_options/OptionGame"
import OptionAudio from "./settings_options/OptionAudio"
import OptionGraphics from "./settings_options/OptionGraphics"

import ReturnButton from "../ui_components/ReturnButton";

function SettingsMenu()
{
    let [selectedOption,setSelectedOption] = useState(<OptionGame/>);

    const navigate = useNavigate(); 
    
    

    return(
        <div className="Menu-container">
            <div className="Fancy-submenu" id="SettingsMenu">
                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>Settings</h1>
                </div>

                <div className="Submenu-content">
                    <div className="Settings-options">
                        <button onClick={() => changeSettingsContentTo("GAME")}>Game</button>
                        <button onClick={() => changeSettingsContentTo("GRAPHICS")}>Graphics</button>
                        <button onClick={() => changeSettingsContentTo("AUDIO")}>Audio</button>
                    </div>

                    <div className="Settings-selected-option">
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
