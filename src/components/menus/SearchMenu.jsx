import React, { useEffect, useState, useRef } from "react";

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import DropdownCheckboxes from "../ui_components/DropdownCheckboxes";
import LobbyListItem from "../ui_components/LobbyListItem";

import { json, useNavigate } from "react-router-dom";




function SearchMenu() {

    const navigate = useNavigate();

    let [lobbies, setLobbies] = useState([]);

    let [searchText, setSearchText] =useState("");


    function getLobbiesJson() {

        let jsonResult;

        let dataHeader = new Headers();
        dataHeader.append("Authorization", "Bearer " + localStorage.getItem('token'));
        dataHeader.append("Access-Control-Allow-Origin", "*");
        dataHeader.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS");

        let dataOptions = {
            method: 'GET',
            headers: dataHeader,
            redirect: 'follow'
        };

        fetch("http://25.74.83.186:8080/api/lobby", dataOptions)
            .then(response => response.text())
            .then(result => {
                setLobbies(JSON.parse(result));
            })
            .catch(error => console.log('error', error));
    }

    function insertLobbies() {
        console.log(lobbies)

        const output = [];

        for (let lobby of lobbies) {
            output.push(
                <LobbyListItem id={lobby.id}

                    name={lobby.name}
                    playersCount={lobby.playersCount}
                    maxPlayers={lobby.maxPlayers}
                    isPrivate={lobby.isPrivate}
                />
            );
        }
        return output;
    }

    const handleChange = event => {
        setSearchText(event.target.value);
        console.log('value is:', searchText);
        
      };

    function searchLobbies(){
        
    }


    return (
        <div className="Wrapper-submenu">
            <div className="Submenu-box" id="SearchMenu">
                <div className="Submenu-header">
                    <ReturnButton onClick={returnToMainMenu}></ReturnButton>
                    <h1>Find a Lobby</h1>
                </div>

                <div className="Submenu-content">



                    <div className="Lobbies">
                        <div className="Lobby-list-header">
                        
                            <SimpleInput placeholder="Search by name" onChange={handleChange}>
                            </SimpleInput>
                            <SimpleButton text="" onClick={() => {console.log("config lobbies")}}>
                            {<i class="fa-solid fa-sliders"></i>}
                            </SimpleButton>
                        
                        </div>

                        <div className="Lobby-list-content">
                            <button onClick={() => {
                                getLobbiesJson();
                            }}> Update</button>
                            {insertLobbies()}
                        </div>

                    </div>



                </div>
            </div>
        </div>)

    function returnToMainMenu() {
        console.log("RETURN PRESSED!");
        navigate("/");
    }



}


export default SearchMenu