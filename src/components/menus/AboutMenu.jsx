import React from "react";

import { Navigate, Link , useNavigate} from "react-router-dom";

import ReturnButton from "../ui_components/ReturnButton";
import CustomCircleButton from "../../components_mui_based/CustomCircleButton";

function AboutMenu()
{
    const navigate = useNavigate(); 

    return(
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="AboutMenu">
                {/* TODO: This entire header part can be change with Component... */}
                <div className="Submenu-header">
                    <CustomCircleButton fontSize="1.5rem" diameter="42px" onClick={returnToMainMenu}>
                        <i className="fa-sharp fa-solid fa-angle-left"></i>
                    </CustomCircleButton>
                    <h1>About Game</h1>
                </div>

                <div className="Submenu-content">
                    <div className="Desc-role-player">
                        <h2>Player</h2>
                        <p>TODO: text for player #1</p>
                        <p>TODO: text for player #2</p>
                        <p>TODO: text for player #3</p>
                        <p>TODO: long text for player #4</p>
                        <p>TODO: very very very very very long text for player #5</p>
                    </div>
                    <div className="Desc-role-host">
                        <h2>Host</h2>
                        <p>TODO: text for host #1</p>
                        <p>TODO: text for host #2</p>
                        <p>TODO: text for host #3</p>
                        <p>TODO: text for host #4</p>
                        <p>TODO: text for host #5</p>
                        <p>TODO: text for host #6</p>
                    </div>
                </div>
            </div>
        </div>

    );

    function returnToMainMenu()
    {           
        console.log("Returning to Main Menu!");
        navigate("/");
    }
}

export default AboutMenu;