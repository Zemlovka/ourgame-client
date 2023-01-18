import React from "react";

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import DropdownCheckboxes from "../ui_components/DropdownCheckboxes";
import LobbyListItem from "../ui_components/LobbyListItem";

import {useNavigate} from "react-router-dom";



function SearchMenu()
{   const navigate = useNavigate(); 

    return(
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="SearchMenu">
                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>Find a Lobby</h1>
                </div>

                <div className="Submenu-content">

                    <div className="Forms">
                        <h2>Direct Connect</h2>
                        <div className="Form-connect">
                            <form>
                                <SimpleInput 
                                    type="text"
                                    className="Input-field"
                                    placeholder="Lobby ID"
                                />
      
                                <SimpleButton text="Join"/>
                                
                                <SimpleInput 
                                    type="text"
                                    className="Input-field"
                                    placeholder="Lobby Password"
                                />
                                
                                <div className="Status">...</div>
                            </form>
                        </div>

                        <h2>Search Options</h2>
                        <div className="Form-search">
                            <form>
     
                                <SimpleButton text="Refresh" className="Search-refresh"/>

                                <SimpleInput 
                                    type="checkbox"
                                    className="Input-checkbox"
                                />
                                <label>Exclude Closed</label>

                                <SimpleInput 
                                    type="checkbox"
                                    className="Input-checkbox"
                                />
                                <label>Exclude Full</label>


                                <DropdownCheckboxes/>

                            </form>
             
                        </div>

                    </div>

                    <div className="Lobbies">
                        <div className="Lobby-list-header">
                            <SimpleButton text="&larr;"/>
                            <h2>Page 0</h2>
                            <SimpleButton text="&rarr;"/>
                        </div>

                        <div className="Lobby-list-content">
                            <LobbyListItem/>
                            <LobbyListItem/>
                            <LobbyListItem/>
                        </div>

                    </div>

                

                </div>
            </div>     
        </div>)

    function returnToMainMenu()
    {           
        console.log("RETURN PRESSED!");
        navigate("/");
    }


}


export default SearchMenu