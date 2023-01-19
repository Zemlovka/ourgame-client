import React, { useEffect, useState, useRef } from "react";

import ReturnButton from "../ui_components/ReturnButton";
import SimpleButton from "../ui_components/SimpleButton";
import SimpleInput from "../ui_components/SimpleInput";
import LobbyListItem from "../ui_components/LobbyListItem";

import Modal from "../ui_components/Modal";


import {useNavigate} from "react-router-dom";

function SearchMenu() {
    const navigate = useNavigate();

    let [lobbies, setLobbies] = useState([]);
    let [searchedLobbies, setSearchedLobbies] = useState([]);
    let [searchText, setSearchText] = useState("");

    let [openConnectionModal, setOpenConnectionModal] = useState(false);

    function getLobbiesJson() {
        let dataHeader = new Headers();
        dataHeader.append(
            "Authorization",
            "Bearer " + localStorage.getItem("token")
        );
        dataHeader.append("Access-Control-Allow-Origin", "*");
        dataHeader.append(
            "Access-Control-Allow-Methods",
            "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        );

        let dataOptions = {
            method: "GET",
            headers: dataHeader,
            redirect: "follow",
        };

        fetch("http://25.74.83.186:8080/api/lobby", dataOptions)
            .then((response) => response.text())
            .then((result) => {
                setLobbies(JSON.parse(result));
                console.log(JSON.parse(result))
            })
            .catch((error) => console.log("error", error));
    }

    
    const renderLobbies = () => (
        //{lobbies.map(lobby =>(
        <>
            {
                lobbies.map((lobby) => (
                <LobbyListItem
                    key={lobby.id}
                    id={lobby.id}
                    name={lobby.name}
                    playersCount={lobby.playersCount}
                    maxPlayers={lobby.maxPlayers}
                    isPrivate={lobby.isPrivate}
                    host={lobby.host}
                
                />
            )
            )}
        </>
    ); 

    function handleChange(event) {
        event.persist();
        setSearchText(event.target.value);
    }

    useEffect(() => {
        console.log("Search message inside useEffect: ", searchText);
        searchLobbies();

    }, [searchText]);

    useEffect(() => {
        renderLobbies()

    }, [searchedLobbies]);

    function searchLobbies() {
        
        let searchedLobbies = [];
        
        lobbies.forEach((lobby) => {
            if (lobby.id.toString().includes(searchText) || lobby.name.toLowerCase().includes(searchText.toLowerCase())) {
                //console.log("est takoe lobbi "+lobby.id);
                searchedLobbies.push(lobby);
            }
            //searchedLobbies.filter(lobby => !(lobby.id.toString().includes(searchText)));
            setSearchedLobbies(searchedLobbies);
        }); 
      
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
                            <SimpleInput
                                placeholder="Search by name"
                                onChange={handleChange}
                            ></SimpleInput>
                            <SimpleButton text="">
                                {<i class="fa-solid fa-sliders"></i>}
                            </SimpleButton>
                        </div>

                        <div className="Lobby-list-content">
                            <button
                                onClick={() => {
                                    getLobbiesJson();
                                }}
                            >
                                {" "}
                                Update
                            </button>
                            {renderLobbies()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function returnToMainMenu() {
        console.log("RETURN PRESSED!");
        navigate("/");
    }
}

export default SearchMenu;
